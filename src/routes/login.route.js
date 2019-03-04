import express from "express";
import jwt from "jsonwebtoken";
import { UserHandler } from "../handlers/user.handler";
import app from "../server";

const userHandler = new UserHandler();
const router = express.Router();

router.post("/", (req, res, next) => {
  let userName = req.body.userName;
  let password = req.body.password;
  console.log(userName);
  console.log(password);

  if (!userName) {
    next(new Error({ message: "Please provide valid Username." }));
  } else if (!password) {
    next(new Error({ message: "Please provide valid Password." }));
  } else {
    userHandler
      .getUserByCredentials(userName, password)
      .then(result => {
        let payload = {
            name: result.name,
            riderNumber: result.riderNumber,
            emailId: result.emailId,
            mobileNumber: result.mobileNumber
        }
        let token = jwt.sign(payload, app.get("secret"), {
          expiresIn: 86400, // expires in 24 hours
        });

        res.json({
          success: true,
          message: "Enjoy your token!",
          token: token,
        });
      })
      .catch(err => {
        next(new Error({ message: "Error occurred." }));
      });
  }
});

export default router;
