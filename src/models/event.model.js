import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  _id: {type: String, required: true, max: 100},
  name: {type: String, required: true, max: 100},
  organiseBy: {type: String, max: 100},
  startPoint: {type: String, required: true, max: 100},
  endPoint: {type: String, required: true, max: 100},
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true}
});

module.exports = mongoose.model("Event", eventSchema);
