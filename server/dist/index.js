"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', [routes_1.userRouter, routes_1.gradesRouter, routes_1.scheduleRouter, routes_1.subjectsRouter, routes_1.teachersRouter, routes_1.sectionsRouter]);
app.use(express_1.default.static('files'));
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Server listening on ${port} port`);
});
