const fs = require("fs");
const { Pool, Client } = require("pg");
const queries = require("./queries");

const connectionData = JSON.parse(fs.readFileSync("./connectionConfig.json"));

console.log(connectionData);
const pool = new Pool(connectionData);

queries.forEach((query) => {
  pool.query(query, (err, res) => {
    if (!err) {
      console.log(res);
    } else {
      console.error(err);
    }
  });
});

pool.end();
