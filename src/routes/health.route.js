import express from "express";
import logger from "../logger/logger";

const router = express.Router();
const log = logger.Logger;

router.get("/", (req, res, next) => {
  res.status(200).send("Server is up");
});

export default router;
