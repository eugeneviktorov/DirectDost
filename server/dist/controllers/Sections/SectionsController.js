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
class SectionsController {
    getSections(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sectionsResponse = yield queries_1.sections.getSections();
                sectionsResponse.rows.forEach((row, index) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const teacher = yield queries_1.teachers.getTeacherById(row.teacher_id);
                        row.teacher_name = teacher.rows[0].fullname;
                        row.teacher_phone = teacher.rows[0].tel;
                        if (index === sectionsResponse.rows.length - 1) {
                            res.status(200).json(sectionsResponse.rows);
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
    getSectionsByIds(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { uid } = req.params;
                const sectionsByMembersResponse = yield queries_1.sections.getSectionsByUserId(uid);
                const sectionsIds = String(sectionsByMembersResponse.rows.map((row) => row.section_id));
                const sectionsResponse = yield queries_1.sections.getSectionsByIds(sectionsIds);
                sectionsResponse.rows.forEach((row, index) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const teacher = yield queries_1.teachers.getTeacherById(row.teacher_id);
                        row.teacher_phone = teacher.rows[0].tel;
                        row.teacher_name = teacher.rows[0].fullname;
                        if (index === sectionsResponse.rows.length - 1) {
                            res.status(200).json(sectionsResponse.rows);
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
exports.default = new SectionsController();
