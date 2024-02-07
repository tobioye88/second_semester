const { getBooks, getSomething } = require("../services/books.service");

const getBooksController = (req, res) => {
  const { page = 1, limit = 10, query = null } = req.query;
  const result = getBooks(page, limit, query);
  res.json(result);
};

const getSomethingController = (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const { page = 1, limit = 10 } = req.query;
  const result = getSomething(page, limit);
  res.json(result);
};

// const getBookByIdController = (req, res) => {
//   console.log(req.params);
//   const { booksId } = req.params;
//   const result = getBookById(booksId);
//   res.json(result);
// }

module.exports = {
  getBooksController,
  getSomethingController,
};
