const express = require("express");
const app = express();
const bookRoute = require("./books.route");
const logger = require("./logger");

// MiddleWare
app.use(express.json());
app.use(logger);
app.use(express.static("public")); // extra to the class

app.use("/books", bookRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all("*", (req, res) => {
  res.status(404).jsonp({ message: "Page not found" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000: Express.js");
});

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     return res.end("Hello World");
//   } else if (req.url === "/books" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify({ name: "Harry potter", pages: 760 }));
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000: Vanilla Node.js");
// });
