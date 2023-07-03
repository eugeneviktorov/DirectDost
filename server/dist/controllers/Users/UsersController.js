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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const connection_1 = __importDefault(require("../../database/connection"));
const queries_1 = require("../../database/queries");
class UsersController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                queries_1.users.getUsers().then((result) => {
                    res.status(200).json(result.rows);
                });
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                connection_1.default.query(`SELECT * FROM users WHERE id='${id}'`).then((result) => {
                    res.status(200).json(result.rows);
                });
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
    getUserByLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, password } = req.body;
                console.log(req.body);
                if (!login || !password)
                    throw Error();
                queries_1.users
                    .getUserByLogin(login)
                    .then((result) => {
                    if (!result.rows[0])
                        throw Error("Login incorrect");
                    if (password !== result.rows[0].password)
                        throw Error("Password incorrect");
                    const userInfo = result.rows[0];
                    // TODO: DELETE CONCOLE
                    console.log("group_id - " + userInfo.group_id);
                    queries_1.groups
                        .getGroupById(Number(userInfo.group_id))
                        .then((groupInfo) => {
                        const groupName = groupInfo.rows[0].group_name;
                        if (!groupName)
                            throw new Error("group is undefined");
                        // TODO: DELETE CONCOLE
                        console.log(groupName);
                        res
                            .json(Object.assign(Object.assign({}, userInfo), { group_name: groupName }))
                            .status(200);
                    })
                        .catch((err) => {
                        // TODO: DELETE CONCOLE
                        console.log(err);
                        res.status(500).json({ errorMessage: err.message });
                    });
                })
                    .catch((err) => {
                    console.log("ERROR");
                    res.status(500).json({ errorMessage: err.message });
                });
            }
            catch (error) {
                console.log("ERROR");
                res.status(500).json({ errorMessage: error });
            }
        });
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, password, email, } = req.body;
                const id = (0, uuid_1.v4)();
                queries_1.users.addUser(id, login, password, email).then((result) => {
                    queries_1.users.getUserById(id).then((result) => {
                        if (result) {
                            res.json(result.rows[0]).status(200);
                        }
                    });
                });
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
}
exports.default = new UsersController();
