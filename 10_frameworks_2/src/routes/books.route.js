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

router.get("/", lastLayerMiddleware, booksController.getBooks);
router.get("/something", booksController.getSomething);
router.get("/:booksId", booksController.getBookById);
router.get(
  "/:booksId/authors/:authorId",
  booksController.getBookByIdAndAuthorId
);

// router.post("/", (req, res) => {
//   res.json({ message: "Book created", books: req.body });
// });

module.exports = router;
