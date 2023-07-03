"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const queries_1 = require("../../database/queries");
class ScheduleController {
    getSchedulies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                queries_1.schedule
                    .getSchedule()
                    .then((result) => {
                    res.status(200).json(result.rows);
                })
                    .catch((err) => {
                    res.status(500).json(err.message);
                });
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
    getScheduleByGroupId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { group_id, user_id } = req.params;
                const scheduleResponse = yield queries_1.schedule.getScheduleById(group_id);
                scheduleResponse.rows.forEach((row, index) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const subjectsResponse = yield queries_1.subjects.getSubjectsById(String(row.subject_id));
                        row.subject_name = subjectsResponse.rows[0].subject_name;
                        const teacher = yield queries_1.teachers.getTeacherById(subjectsResponse.rows[0].teacher_id);
                        row.teacher_name = teacher.rows[0].fullname;
                        const grade = yield queries_1.grades.getGradesByUserIdAndSubjId(user_id, row.subject_id);
                        row.grade = {
                            current: grade.rows[0].current_grade,
                            max: grade.rows[0].max_grade,
                        };
                        if (index === scheduleResponse.rows.length - 1) {
                            res.status(200).json(scheduleResponse.rows);
                        }
                    }
                    catch (error) {
                        res.status(500).json("Incorrect request");
                    }
                }));
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
}
exports.default = new ScheduleController();
