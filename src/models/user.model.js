import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {type: String, required: true, max: 100},
  name: {type: String, required: true, max: 100},
  password: {type: String, required: true, max: 10},
  riderNumber: {type: String, required: true, max: 100},
  emailId: {type: String, required: true, max: 100},
  mobileNumber: {type: String, required: true, max: 10},
});

module.exports = mongoose.model("User", userSchema);
