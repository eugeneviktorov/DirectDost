"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Teachers_1 = require("../controllers/Teachers");
const router = express_1.default.Router();
router.get("/teachers", (req, res) => Teachers_1.TeachersController.getTeachers(req, res));
router.get("/teachers/:id", (req, res) => Teachers_1.TeachersController.getTeacherById(req, res));
exports.default = router;
