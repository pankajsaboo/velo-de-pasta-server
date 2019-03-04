import express from "express";
import { LocationHandler } from "../handlers/location.handler";
import logger from "../logger/logger";

const locationHandler = new LocationHandler();
const router = express.Router();
const log = logger.Logger;

router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  locationHandler
    .getLocationEventRiderDetails(id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/", (req, res, next) => {
  locationHandler
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
  locationHandler
    .save(req.body)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
});

export default router;
