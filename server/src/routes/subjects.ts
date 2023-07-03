import express, { Response, Request } from "express";
import { SubjectsController } from "../controllers/Subjects";

const router = express.Router();

router.get("/subjects", (req: Request, res: Response) =>
  SubjectsController.getSubjects(req, res)
);

router.get("/subjects/:id", (req: Request, res: Response) =>
  SubjectsController.getSubjectsById(req, res)
);

export default router;
