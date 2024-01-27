// const { generateRandomString } = require("./utils/helper.util");
import { generateRandomString } from "./utils/helper.util.js";

function books(req, res) {
  console.log(generateRandomString(10));
  // crud operations
  // create, read, update, delete
  // POST, GET, PUT, DELETE
  // POST /books
  if (req.method === "POST") {
    // create a book
  }
  // GET /books
  if (req.method === "GET") {
    // get all books
  }
  // GET /books/:id
  if (req.method === "GET") {
    // get a book by id
  }
  // PUT /books/:id
  if (req.method === "PUT") {
    // update a book by id
  }
  // DELETE /books/:id
  if (req.method === "DELETE") {
    // delete a book by id
  }
  res.write("Books API");
}

// module.exports = books; // default export
// module.exports = { books }; // named export
// es6 modules
export default books;
