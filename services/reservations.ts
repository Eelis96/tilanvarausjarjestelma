import { connectToDatabase } from '../utils/mongodb';
import Reservation from '../models/Reservation';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const reservations = await Reservation.find({});
        res.status(200).json(reservations);
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch reservations' });
      }
      break;
    case 'POST':
      try {
        const reservation = new Reservation(req.body);
        await reservation.save();
        res.status(201).json(reservation);
        console.log("tallenettu varaus");
      } catch (error) {
        console.log(error);
        console.log("varaus ei onnistunut");
        res.status(500).json({ error: 'Failed to create reservation' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
