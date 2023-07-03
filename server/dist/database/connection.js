"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connectionData = {
    user: "gen_user",
    host: "109.172.82.16",
    database: "default_db",
    password: "9rk17ljc77",
    port: 5432
};
const pool = new pg_1.Pool(connectionData);
console.log(`PostgreSql connected with user ${connectionData.user}\nDatabase Name - ${connectionData.database}`);
exports.default = pool;
