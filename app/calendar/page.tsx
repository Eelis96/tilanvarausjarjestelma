"use client";

import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

type Reservation = {
  title: string;
  start: string; // Use string to include date and time in ISO format
  end: string;
};

export default function Home() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    fetch('../services/reservations.ts')
      .then(response => response.json())
      .then(data => setReservations(data));
  }, []);

  const handleDateSelect = async (selectInfo) => {
    const title = prompt('Enter reservation name:');
    const durationInput = prompt('Enter duration of event: (in hours)');
    const duration = Number(durationInput);
  
    if (!title) return;
  
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
  
    const start = new Date(selectInfo.start); // Use selected time
    const end = new Date(start.getTime() + ((isNaN(duration) || duration <= 0 ? 2 : duration) * 60 * 60 * 1000));
  
    const reservation: Reservation = {
      title,
      start: start.toISOString(),
      end: end.toISOString(),
    };
  
    await fetch('../services/reservations.ts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation),
    });
  
    setReservations([...reservations, reservation]);
  };

  return (
    <div  >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek" // Set initial view to timeGridWeek
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,timeGridDay' // Add buttons to switch between views
        }}
        selectable={true}
        events={reservations}
        select={handleDateSelect}
        displayEventTime={true}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }}
      />
    </div>
  );
}
