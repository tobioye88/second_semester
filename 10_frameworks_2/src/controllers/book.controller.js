const bookService = require("../services/books.service");

const getBooks = (req, res) => {
  const { page = 1, limit = 10, query = null } = req.query;
  const result = bookService.getBooks(page, limit, query);
  res.json(result);
};

const getSomething = (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const { page = 1, limit = 10 } = req.query;
  const result = bookService.getSomething(page, limit);
  res.json(result);
};

const getBookById = (req, res) => {
  const { booksId } = req.params;
  const result = bookService.getBookById(booksId);
  res.json(result);
};

const getBookByIdAndAuthorId = (req, res) => {
  const { booksId, authorId } = req.params;
  const result = bookService.getBookByIdAndAuthorId(booksId, authorId);
  res.json(result);
};

module.exports = {
  getBooks,
  getSomething,
  getBookById,
  getBookByIdAndAuthorId,
};
