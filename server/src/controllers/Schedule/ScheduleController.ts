import { Response, Request } from "express";
import { grades, schedule, subjects, teachers } from "../../database/queries";

class ScheduleController {
  async getSchedulies(req: Request, res: Response) {
    try {
      schedule
        .getSchedule()
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

  async getScheduleByGroupId(req: Request, res: Response) {
    try {
      const { group_id, user_id } = req.params;

      const scheduleResponse = await schedule.getScheduleById(group_id);
      
      scheduleResponse.rows.forEach( async (row, index)=>{
        try {

          const subjectsResponse = await subjects.getSubjectsById(String(row.subject_id));
          row.subject_name = subjectsResponse.rows[0].subject_name;

          const teacher = await teachers.getTeacherById(subjectsResponse.rows[0].teacher_id);
          row.teacher_name = teacher.rows[0].fullname;

          const grade = await grades.getGradesByUserIdAndSubjId(user_id, row.subject_id)
          row.grade = {
            current: grade.rows[0].current_grade,
            max: grade.rows[0].max_grade,
          };
          
          if (index === scheduleResponse.rows.length - 1) {
            res.status(200).json(scheduleResponse.rows);
          }

        } catch (error) {
          res.status(500).json("Incorrect request");
        }
      })
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }
}

export default new ScheduleController();
