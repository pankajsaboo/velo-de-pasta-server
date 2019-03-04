import Event from "../models/event.model";
import { getId } from "../db/id-generator";

export class EventHandler {
  async getOne(id) {
    return await Event.findById(id)
      .then(result => {
        return result;
      })
      .catch(err => {
        throw err;
      });
  }

  // save object to db
  async save(data) {
    let event = new Event({
      _id: getId(),
      name: data.name,
      organiseBy: data.organiseBy,
      startPoint: data.startPoint,
      endPoint: data.endPoint,
      startDate: data.startDate,
      endDate: data.endDate,
    });
    return await event
      .save()
      .then(result => {
        return result;
      })
      .catch(err => {
          console.log(err);
        throw err;
      });
  }

  async getAll() {
    return Event.find()
      .then(result => {
        return result;
      })
      .catch(err => {
        throw err;
      });
  }
}
