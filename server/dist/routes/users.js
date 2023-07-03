"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Users_1 = require("../controllers/Users");
const router = express_1.default.Router();
router.get("/users", (req, res) => Users_1.UsersController.getUsers(req, res));
router.get("/users/:id", (req, res) => Users_1.UsersController.getUserById(req, res));
router.post("/users", (req, res) => Users_1.UsersController.addUser(req, res));
router.post("/users/login", (req, res) => Users_1.UsersController.getUserByLogin(req, res));
exports.default = router;
