"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Grades_1 = require("../controllers/Grades");
const router = express_1.default.Router();
router.get("/grades", (req, res) => Grades_1.GradesController.getGrades(req, res));
router.get("/grades/:id", (req, res) => Grades_1.GradesController.getGradesByUserId(req, res));
exports.default = router;
