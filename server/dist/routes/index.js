"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionsRouter = exports.gradesRouter = exports.scheduleRouter = exports.subjectsRouter = exports.teachersRouter = exports.userRouter = void 0;
var users_1 = require("./users");
Object.defineProperty(exports, "userRouter", { enumerable: true, get: function () { return __importDefault(users_1).default; } });
var teachers_1 = require("./teachers");
Object.defineProperty(exports, "teachersRouter", { enumerable: true, get: function () { return __importDefault(teachers_1).default; } });
var subjects_1 = require("./subjects");
Object.defineProperty(exports, "subjectsRouter", { enumerable: true, get: function () { return __importDefault(subjects_1).default; } });
var schedule_1 = require("./schedule");
Object.defineProperty(exports, "scheduleRouter", { enumerable: true, get: function () { return __importDefault(schedule_1).default; } });
var grades_1 = require("./grades");
Object.defineProperty(exports, "gradesRouter", { enumerable: true, get: function () { return __importDefault(grades_1).default; } });
var sections_1 = require("./sections");
Object.defineProperty(exports, "sectionsRouter", { enumerable: true, get: function () { return __importDefault(sections_1).default; } });
