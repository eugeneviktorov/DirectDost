"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Sections_1 = require("../controllers/Sections");
const router = express_1.default.Router();
router.get("/sections", (req, res) => Sections_1.SectionsController.getSections(req, res));
router.get("/sections/:uid", (req, res) => Sections_1.SectionsController.getSectionsByIds(req, res));
exports.default = router;
