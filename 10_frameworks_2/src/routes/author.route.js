// const router = require("express").Router();
const express = require("express");
const authorRouter = express.Router();

authorRouter.get("/", (req, res) => {
  res.json([{ name: "JK Rowling", age: 55 }]);
});

authorRouter.get("/:authorId", (req, res) => {
  res.json({ name: "JK Rowling", age: 55 });
});

authorRouter.post("/", (req, res) => {
  res.json({ message: "Author created", author: req.body });
});

module.exports = authorRouter;
