import express, { Response, Request } from "express";
import { SectionsController } from "../controllers/Sections";

const router = express.Router();

router.get("/sections", (req: Request, res: Response) =>
  SectionsController.getSections(req, res)
);

router.get("/sections/:uid", (req: Request, res: Response) =>
  SectionsController.getSectionsByIds(req, res)
);

export default router;
