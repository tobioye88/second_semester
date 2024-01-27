// const http = require("http");
import http from "http";
// const books = require("./books");
import books from "./books.js";
// const authors = require("./authors");
import authors from "./authors.js";
// const { generateRandomString } = require("./utils/helper.util");
import { generateRandomString } from "./utils/helper.util.js";

const server = http.createServer((req, res) => {
  console.log(generateRandomString(30));
  // read data from req

  if (req.url === "/books") {
    books(req, res);
  }
  if (req.url === "/authors") {
    authors(req, res);
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
