import mongoose from "mongoose";

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    _id: {type: String, required: true, max: 100},
  eventId: {type: String, required: true, max: 100},
  riderNumber: {type: String, required: true, max: 10},
  longitude: {type: Number, required: true},
  latitude: {type: Number, required: true},
  locationTime: {type: Date, required: true},
});

module.exports = mongoose.model("Location", locationSchema);
