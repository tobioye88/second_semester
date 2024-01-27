function authors(req, res) {
  // crud operations
  // create, read, update, delete
  // POST, GET, PUT, DELETE
  // POST /authors
  if (req.method === "POST") {
    // create a book
  }
  // GET /authors
  if (req.method === "GET") {
    // get all authors
  }
  // GET /authors/:id
  if (req.method === "GET") {
    // get a book by id
  }
  // PUT /authors/:id
  if (req.method === "PUT") {
    // update a book by id
  }
  // DELETE /authors/:id
  if (req.method === "DELETE") {
    // delete a book by id
  }
  res.send("authors API");
}

// module.exports = authors;
export default authors;
