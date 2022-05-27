import mongoose, { ConnectOptions} from "mongoose";
import Dotenv from "dotenv";
Dotenv.config();

const MONGO_URI = process.env.MONGODB || 'mongodb://localhost:27017/facebookdb';

export const Connection = async() => {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true } as ConnectOptions)
    console.log("Database is connectd");
}