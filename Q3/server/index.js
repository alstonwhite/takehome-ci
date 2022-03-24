const express = require("express");
const path = require("path");
const pg = require("pg");
const server = express();

const db = new pg.Client("postgres://localhost").connect();

server.use(express.json());

server.post("/", async (req, res, next) => {
  const choices = req.body.choices;
  const includesCalculus = choices.find((element) => {
    if (element.toLowerCase().includes("calculus")) return true;
  });
  if (!includesCalculus) {
    res.status(400).send("Not a valid input");
    return;
  } else {
    try {
      const sqlQuery = `INSERT INTO choices (choice1, choice3, choice3) VALUES (${choices.join(", ")})`;
      const data = db.query(sqlQuery);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
});

server.use(express.static(path.join(__dirname, "..", "client")));

server.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/index.html"));
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.message });
});

server.listen(3000, () => console.log("listening on port 3000"));
