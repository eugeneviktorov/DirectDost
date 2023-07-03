import express, { Response, Request } from "express";
import { ScheduleController } from "../controllers/Schedule";

const router = express.Router();

router.get("/schedule", (req: Request, res: Response) =>
  ScheduleController.getSchedulies(req, res)
);

router.get("/schedule/:group_id/:user_id", (req: Request, res: Response) =>
  ScheduleController.getScheduleByGroupId(req, res)
);

export default router;
