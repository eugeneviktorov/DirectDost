import { Response, Request } from "express";
import { grades } from "../../database/queries";

class GradesController {
  async getGrades(req: Request, res: Response) {
    try {
        grades.getGrades().then((result) => {
          res.status(200).json(result.rows);
        })
        .catch((err: Error) => {
          res.status(500).json(err.message);
        });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async getGradesByUserId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      grades.getGradesByUserId(id)
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

export default new GradesController();
