import mongoose from "mongoose";
import config from "../config";

let database;

const connect = async () => {
    const MONGODB_URL = config.DB_CONNECTION_STRING;

    if (database) return;

    mongoose
        .connect(MONGODB_URL, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        .then((connection) => {
            database = connection;
            console.log("🆗 DATABASE SYNCED")
        })
        .catch((err) => {
            console.log(err.message);
        });
};


export {connect};