import express, { Response, Request } from "express";
import { UsersController } from "../controllers/Users";

const router = express.Router();

router.get("/users", (req: Request, res: Response) =>
  UsersController.getUsers(req, res)
);

router.get("/users/:id", (req: Request, res: Response) =>
  UsersController.getUserById(req, res)
);

router.post("/users", (req: Request, res: Response) =>
  UsersController.addUser(req, res)
);

router.post("/users/login", (req: Request, res: Response) =>
  UsersController.getUserByLogin(req, res)
);

export default router;
