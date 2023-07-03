"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Subjects_1 = require("../controllers/Subjects");
const router = express_1.default.Router();
router.get("/subjects", (req, res) => Subjects_1.SubjectsController.getSubjects(req, res));
router.get("/subjects/:id", (req, res) => Subjects_1.SubjectsController.getSubjectsById(req, res));
exports.default = router;
