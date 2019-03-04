import { getId } from "../db/id-generator";
import Location from "../models/location.model";

export class LocationHandler {
  async getOne(id) {
    return await Location.findById(id)
      .then(result => {
        return result;
      })
      .catch(err => {
        throw err;
      });
  }

  // save object to db
  async save(data) {
    let location = new Location({
      _id: getId(),
      eventId: data.eventId,
      riderNumber: data.riderNumber,
      longitude: data.longitude,
      latitude: data.latitude,
      locationTime: data.locationTime,
    });
    return await location
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
    return Location.find()
      .then(result => {
        return result;
      })
      .catch(err => {
        throw err;
      });
  }

  async getLocationEventRiderDetails(id) {
    return Location.aggregate([
      { $match: { _id: "40omu426jst6n16l" } },
      {
        $lookup: {
          from: "events",
          localField: "eventId",
          foreignField: "_id",
          as: "event",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "riderNumber",
          foreignField: "riderNumber",
          as: "rider",
        },
      },
      { $unwind: "$event" },
      { $unwind: "$rider" },
    ])
      .then(result => {
        return result;
      })
      .catch(err => {
        throw err;
      });
  }
}
