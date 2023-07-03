import { Response, Request } from "express";
import { sections, teachers } from "../../database/queries";

class SectionsController {
  async getSections(req: Request, res: Response) {
    try {
      const sectionsResponse = await sections.getSections();

      sectionsResponse.rows.forEach( async (row, index)=>{
        try {

          const teacher = await teachers.getTeacherById(row.teacher_id);
          row.teacher_name = teacher.rows[0].fullname;
          row.teacher_phone = teacher.rows[0].tel;
          
          if (index === sectionsResponse.rows.length - 1) {
            res.status(200).json(sectionsResponse.rows);
          }

        } catch (error) {
          res.status(500).json("Incorrect request");
        }
      })


    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }
  async getSectionsByIds(req: Request, res: Response) {
    try {
      const { uid } = req.params;

      const sectionsByMembersResponse = await sections.getSectionsByUserId(uid);
      const sectionsIds = String(
        sectionsByMembersResponse.rows.map((row) => row.section_id)
      );

      const sectionsResponse = await sections.getSectionsByIds(sectionsIds);

      sectionsResponse.rows.forEach( async (row, index)=>{
        try {

          const teacher = await teachers.getTeacherById(row.teacher_id);
          row.teacher_phone = teacher.rows[0].tel;
          row.teacher_name = teacher.rows[0].fullname;
          
          if (index === sectionsResponse.rows.length - 1) {
            res.status(200).json(sectionsResponse.rows);
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

export default new SectionsController();
