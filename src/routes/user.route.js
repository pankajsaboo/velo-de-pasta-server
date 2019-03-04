import express from "express";
import { UserHandler } from "../handlers/user.handler";
import logger from "../logger/logger";

const userHandler = new UserHandler();
const router = express.Router();
const log = logger.Logger;

router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  userHandler
    .getOne(id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/", (req, res, next) => {
  userHandler
    .getAll()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
});

export default router;
