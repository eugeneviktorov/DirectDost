import pool from "./connection";

const DB_QUERIES = {
  users: {
    addUser: (id: string, login: string, password: string, email: string) =>
      pool.query(
        `INSERT INTO users (id, login, password, email) VALUES ('${id}', '${login}', '${password}', '${email}')`
      ),

    getUserById: (id: string) =>
      pool.query(`SELECT * FROM users WHERE id='${id}'`),

    getUserByLogin: (login: string) =>
      pool.query(`SELECT * FROM users WHERE login='${login}'`),

    getUsers: () => pool.query("SELECT * FROM users;"),
  },
  groups: {
    getGroupById: (id: number) =>
    pool.query(`SELECT * FROM groups WHERE id='${id}'`),
  },
  teachers: {
    getTeachers: () => pool.query("SELECT * FROM teachers"),

    getTeacherById: (id: string) =>
      pool.query(`SELECT * FROM teachers WHERE id='${id}'`),
  },
  subjects: {
    getSubjects: () => pool.query("SELECT * FROM subjects"),

    getSubjectsById: (id: string) =>
      pool.query(`SELECT * FROM subjects WHERE id='${id}'`),
  },
  schedule: {
    getSchedule: () => pool.query("SELECT * FROM schedule"),

    getScheduleById: (id: string) =>
      pool.query(`SELECT * FROM schedule WHERE group_id='${id}'`),
  },

  grades: {
    getGrades: () => pool.query("SELECT * FROM grades"),

    getGradesByUserId: (uid: string) =>
      pool.query(`SELECT * FROM grades WHERE user_id='${uid}'`),
    
    
    getGradesByUserIdAndSubjId: (uid: string, subject_id: string) =>
      pool.query(`SELECT * FROM grades WHERE user_id='${uid}' AND subject_id='${subject_id}'`),
  },

  sections: {
    getSections: () => pool.query("SELECT * FROM sections"),

    getSectionsByIds: (id:string) => pool.query(`SELECT * FROM sections WHERE id IN (${id})`),

    getSectionsByUserId: (uid: string) =>
      pool.query(`SELECT * FROM sections_members WHERE user_id='${uid}'`),

    getSectionsByTeacherId: (uid: string) =>
      pool.query(`SELECT * FROM sections WHERE teacher_id='${uid}'`),
  },
};

export const { users, teachers, subjects, schedule, grades, groups, sections } = DB_QUERIES;
