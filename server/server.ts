import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Reservation from '../models/Reservation.js';

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.post('../services/reservations', async (req, res) => {
  const reservation = new Reservation(req.body);
  await reservation.save();
console.log("tallenettu varaus");
  res.status(201).send(reservation);
});

app.get('../services/reservations', async (req, res) => {
  const reservations = await Reservation.find();
  res.send(reservations);
console.log("haettu varaukset");
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
