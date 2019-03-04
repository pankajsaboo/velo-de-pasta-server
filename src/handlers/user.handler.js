import { getId } from "../db/id-generator";
import User from "../models/user.model";

export class UserHandler {
  // save object to db
  async save(data) {
    let user = new User({
      _id: getId(),
      name: data.name,
      password: data.password,
      riderNumber: data.riderNumber,
      emailId: data.emailId,
      mobileNumber: data.mobileNumber,
    });

    return await user
      .save()
      .then(result => {
        return result;
      })
      .catch(err => {
        throw err;
      });
  }

  async isEmailIdExist(emailId) {
    return await User.find({
      emailId: emailId,
    })
      .countDocuments()
      .catch(err => {
        throw err;
      });
  }

  async isEmailExistUpdate(data) {
    let emailIdExist = await DatabaseService.findByCriteria(collectionName, {
      _id: { $ne: data._id },
      emailId: data.emailId,
    });
    if (emailIdExist.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  async getUserByCredentials(userName, password) {
    console.log("User: ", userName, " pass: ", password);
    let criteria = {
      $and: [
        { password: password },
        {
          $or: [{ emailId: userName }, { riderNumber: userName }],
        },
      ],
    };
    return await User.find(criteria)
      .then(result => {
        console.log("result: ", result);
        return result[0];
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  async getOne(id) {
    return await User.findById(id)
      .then(result => {
        return result;
      })
      .catch(err => {
        throw err;
      });
  }

  async getAll() {
    return User.find()
      .then(result => {
        return result;
      })
      .catch(err => {
        throw err;
      });
  }
}
