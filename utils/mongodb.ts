import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("ei db yhteyttä");
    const opts = {
      // Updated options if needed
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  console.log("db yhteys");
  cached.conn = await cached.promise;
  return cached.conn;
}

export { connectToDatabase };
