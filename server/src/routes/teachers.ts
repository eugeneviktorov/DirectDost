import express, { Response, Request } from "express";
import { TeachersController } from "../controllers/Teachers";

const router = express.Router();

router.get("/teachers", (req: Request, res: Response) =>
TeachersController.getTeachers(req, res)
);

router.get("/teachers/:id", (req: Request, res: Response) =>
TeachersController.getTeacherById(req, res)
);

export default router;
