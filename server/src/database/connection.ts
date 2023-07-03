import fs from "fs";
import { Pool, Client } from "pg";

const connectionData = {
    user: "gen_user",
    host: "109.172.82.16",
    database: "default_db",
    password: "9rk17ljc77",
    port: 5432
}

const pool = new Pool(connectionData);
console.log(
  `PostgreSql connected with user ${connectionData.user}\nDatabase Name - ${connectionData.database}`
);

export default pool;
