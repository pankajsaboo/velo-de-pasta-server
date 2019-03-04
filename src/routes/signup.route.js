import express from "express";
import { UserHandler } from "../handlers/user.handler";
import logger from "../logger/logger";

const userHandler = new UserHandler();
const router = express.Router();
const log = logger.Logger;

// save obj
router.post("/", (req, res, next) => {
  userHandler
    .isEmailIdExist(req.body.emailId)
    .then(data => {
      if (data > 0) {
        res.status(422).send({ msg: "EmailId Exists" });
      } else {
        userHandler
          .save(req.body)
          .then(result => {
            res.status(200).send(result);
          })
          .catch(err => {
            next(err);
          });
      }
    })
    .catch(err => {
      throw err;
    });
});

export default router;
