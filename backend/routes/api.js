import { Router } from "express";
import {
  createMessage,
  getEvents,
  getSermons,
} from "../controllers/content.js";

const router = Router();

router.get("/sermons", getSermons);
router.get("/events", getEvents);
router.post("/messages", createMessage);

export default router;