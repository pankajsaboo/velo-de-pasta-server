import express from "express";
import { EventHandler } from "../handlers/event.handler";
import logger from "../logger/logger";

const eventHandler = new EventHandler();
const router = express.Router();
const log = logger.Logger;

router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  eventHandler
    .getOne(id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/", (req, res, next) => {
  eventHandler
    .getAll()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
});

// save obj
router.post("/", (req, res, next) => {
  console.log(req.body);
  eventHandler
    .save(req.body)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
});

export default router;
