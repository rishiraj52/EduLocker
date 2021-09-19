const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const client = require("./database/postgresIntialization");
const { getRole, addUser } = require("./database/fetchDataFromDatabase");

dotenv.config();
const corsOption = {
  origin: "http://localhost:1234",
};
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors(corsOption));

if (process.env.NODE_ENV == "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.json({ msg: "Express API running in development" });
    res.status(200);
  });
}

app.post("/getRole", (req, res) => {
  getRole(req.body)
    .then((e) => res.json(e))
    .catch((e) => res.json(e));
});
app.post("/addUser", (req, res) => {
  addUser(req.body)
    .then((e) => res.json(e))
    .catch((e) => res.json(e));
});

app.listen(PORT, () => {
  try {
    client.connect();
    
  } catch (error) {
    console.log("error while connecting to DB: ",error)
  }
  console.log(`Listening at PORT:${PORT}`);
});
