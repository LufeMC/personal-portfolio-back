import { config } from '../config';
import mongoose from 'mongoose';

const connectMongoose = () => {
    mongoose.connect(`mongodb+srv://${config.database.username}:${config.database.password}@cluster0.cf2wr.mongodb.net/${config.database.name}?retryWrites=true&w=majority`);

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
}

export const Database = {
    connectMongoose
}