import { Response, Request } from "express";
import { teachers } from "../../database/queries";

class TeachersController {
  async getTeachers(req: Request, res: Response) {
    try {
        teachers.getTeachers().then((result) => {
        res.status(200).json(result.rows);
      }).catch((err: Error) => {
        res.status(500).json(err.message);
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async getTeacherById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      teachers.getTeacherById(id).then((result) => {
        res.status(200).json(result.rows);
      }).catch((err: Error) => {
        res.status(500).json(err.message);
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }
}

export default new TeachersController();
