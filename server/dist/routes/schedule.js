"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Schedule_1 = require("../controllers/Schedule");
const router = express_1.default.Router();
router.get("/schedule", (req, res) => Schedule_1.ScheduleController.getSchedulies(req, res));
router.get("/schedule/:group_id/:user_id", (req, res) => Schedule_1.ScheduleController.getScheduleByGroupId(req, res));
exports.default = router;
