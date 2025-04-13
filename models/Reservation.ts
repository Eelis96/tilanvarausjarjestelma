import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  title: String,
  Date,
  end: Date,
});

const Reservation = mongoose.models.Reservation || mongoose.model('Reservation', reservationSchema);

export default Reservation;
