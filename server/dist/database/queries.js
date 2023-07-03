"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sections = exports.groups = exports.grades = exports.schedule = exports.subjects = exports.teachers = exports.users = void 0;
const connection_1 = __importDefault(require("./connection"));
const DB_QUERIES = {
    users: {
        addUser: (id, login, password, email) => connection_1.default.query(`INSERT INTO users (id, login, password, email) VALUES ('${id}', '${login}', '${password}', '${email}')`),
        getUserById: (id) => connection_1.default.query(`SELECT * FROM users WHERE id='${id}'`),
        getUserByLogin: (login) => connection_1.default.query(`SELECT * FROM users WHERE login='${login}'`),
        getUsers: () => connection_1.default.query("SELECT * FROM users;"),
    },
    groups: {
        getGroupById: (id) => connection_1.default.query(`SELECT * FROM groups WHERE id='${id}'`),
    },
    teachers: {
        getTeachers: () => connection_1.default.query("SELECT * FROM teachers"),
        getTeacherById: (id) => connection_1.default.query(`SELECT * FROM teachers WHERE id='${id}'`),
    },
    subjects: {
        getSubjects: () => connection_1.default.query("SELECT * FROM subjects"),
        getSubjectsById: (id) => connection_1.default.query(`SELECT * FROM subjects WHERE id='${id}'`),
    },
    schedule: {
        getSchedule: () => connection_1.default.query("SELECT * FROM schedule"),
        getScheduleById: (id) => connection_1.default.query(`SELECT * FROM schedule WHERE group_id='${id}'`),
    },
    grades: {
        getGrades: () => connection_1.default.query("SELECT * FROM grades"),
        getGradesByUserId: (uid) => connection_1.default.query(`SELECT * FROM grades WHERE user_id='${uid}'`),
        getGradesByUserIdAndSubjId: (uid, subject_id) => connection_1.default.query(`SELECT * FROM grades WHERE user_id='${uid}' AND subject_id='${subject_id}'`),
    },
    sections: {
        getSections: () => connection_1.default.query("SELECT * FROM sections"),
        getSectionsByIds: (id) => connection_1.default.query(`SELECT * FROM sections WHERE id IN (${id})`),
        getSectionsByUserId: (uid) => connection_1.default.query(`SELECT * FROM sections_members WHERE user_id='${uid}'`),
        getSectionsByTeacherId: (uid) => connection_1.default.query(`SELECT * FROM sections WHERE teacher_id='${uid}'`),
    },
};
exports.users = DB_QUERIES.users, exports.teachers = DB_QUERIES.teachers, exports.subjects = DB_QUERIES.subjects, exports.schedule = DB_QUERIES.schedule, exports.grades = DB_QUERIES.grades, exports.groups = DB_QUERIES.groups, exports.sections = DB_QUERIES.sections;
