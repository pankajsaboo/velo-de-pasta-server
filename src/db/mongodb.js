import * as constants from './../constants'; // import constants
import mongoose from 'mongoose';

const uri = `mongodb+srv://admin:admin@cluster0-8qjoa.mongodb.net/RACE_APP?retryWrites=true`;
let _db;

const connectDB = async (callback) => {
    try {
        mongoose.connect(uri, { useNewUrlParser: true }, (err, db) => {
            _db = db
            return callback(err)
        })
    } catch (e) {
        throw e;
    }
}

const getDB = () => _db

const disconnectDB = () => _db.close()

export default { connectDB, getDB, disconnectDB };