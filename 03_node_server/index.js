const http = require("http");

const behavior = (req, res) => {
  //handle the following requests
  // GET /books
  // PUT /books
  // DELETE /books
  // GET /books/author/
  // POST /books/author/
  // PUT /books/author/

  // Post request
  // books
  console.log(req.method); // GET, POST, PUT, DELETE
  console.log(req.url); // /books

  if (req.method === "POST" && req.url === "/books") {
    res.write("Hello from POST /books");
  }
  res.write("Hello from page " + req.url);
  res.end();
};

const server = http.createServer(behavior);

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
