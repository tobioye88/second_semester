const http = require("http");

// Http Methods
// GET - get data
// POST - create data
// PUT - update data completely
// PATCH - update data partially
// DELETE - delete data

// behavior
const behavior = (req, res) => {
  //handle the following requests
  // PUT /books/author/

  // Post request
  // books
  console.log(req.method); // GET, POST, PUT, DELETE
  console.log(req.url); // /books

  if (req.method === "GET" && req.url === "/books") {
    res.write(
      JSON.stringify([
        { title: "The Alchemist", pages: 200 },
        { title: "The Alchemist", pages: 200 },
      ])
    );
  }
  if (req.method === "POST" && req.url === "/books") {
    res.write("Hello from POST /books");
  }
  if (req.method === "PUT" && req.url === "/books/author") {
    res.write("Hello from PUT /books/author");
  }
  // res.write("Hello from page " + req.url);
  res.end();
};

// create a server
const server = http.createServer(behavior);

// listen on a port
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// http://localhost:8000/books?title=Alchemist&pages=200
// scheme -> http
// host -> localhost
// port -> 8000
// path -> /books
// query -> ?title=Alchemist&pages=200
// - title=Alchemist
// - pages=200

// The amount of your sacrifice determine the magnitude of you success.
// Nothing is guaranteed though.
// You can only increase your chances of success.

// 1 == "1" // true
// 1 === "1" // false
// "1" === "1" // true
