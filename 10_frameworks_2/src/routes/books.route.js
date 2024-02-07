const express = require("express");
const router = express.Router();
const booksController = require("../controllers/book.controller");

router.use((req, res, next) => {
  console.log("request from books");
  console.log("authentication", req.headers["authentication"]);
  console.log("Content-type", req.headers["content-type"]); // node converts al headers to lowercase
  next();
});

const lastLayerMiddleware = (req, res, next) => {
  console.log("last layer middleware");
  next();
};

router.get("/", lastLayerMiddleware, (req, res) => {
  booksController.getBooksController(req, res);
});

router.get("/something", (req, res) => {
  booksController.getSomethingController(req, res);
});

router.get("/:booksId", (req, res) => {
  console.log(req.params);
  res.json({ name: "Harry potter", pages: 760 });
});

router.get("/:booksId/authors/:authorId", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.json({ name: "Harry potter", pages: 760 });
});

router.post("/", (req, res) => {
  res.json({ message: "Book created", books: req.body });
});

module.exports = router;
