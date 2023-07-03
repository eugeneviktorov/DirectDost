import { Response, Request } from "express";
import { subjects } from "../../database/queries";

class SubjectsController {
  async getSubjects(req: Request, res: Response) {
    try {
      subjects
        .getSubjects()
        .then((result) => {
          res.status(200).json(result.rows);
        })
        .catch((err: Error) => {
          res.status(500).json(err.message);
        });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async getSubjectsById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      subjects
        .getSubjectsById(id)
        .then((result) => {
          res.status(200).json(result.rows);
        })
        .catch((err: Error) => {
          res.status(500).json(err.message);
        });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }
}

export default new SubjectsController();
