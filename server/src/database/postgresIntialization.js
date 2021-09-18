const { Client } = require("pg");

const connectionString =
  process.env.DATABASE_URL || "postgressql://postgres:1@localhost:5432/hackprep";
const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports=client;