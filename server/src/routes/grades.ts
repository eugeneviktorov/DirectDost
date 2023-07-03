import express, { Response, Request } from "express";
import { GradesController } from "../controllers/Grades";

const router = express.Router();

router.get("/grades", (req: Request, res: Response) =>
  GradesController.getGrades(req, res)
);

router.get("/grades/:id", (req: Request, res: Response) =>
  GradesController.getGradesByUserId(req, res)
);

export default router;
