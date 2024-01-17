// create a simple server in nodejs
// import http module
const http = require("http");
const path = require("path");
const fs = require("fs");
const os = require("os");

// ./src/images/cat.jpg
// ../src/images/cat.jpg

// create a server
const server = http.createServer((req, res) => {
  // console.log(req.headers);
  // console.log(process.env.NODE_ENV);
  console.log(process.version);
  console.log(req.url);
  console.log(req.method);
  if (req.url === "/") {
    res.write("Hello world!");
    res.end();
  } else if (req.url === "/hello" && req.method === "POST") {
    res.write("Hello altschoolers!");
    res.end();
  } else if (req.url === "/read") {
    fs.readFile("./hello.txt", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write("404 not found - We don't know what you are looking for!");
    res.end();
  }
  // console.log(path.dirname(__filename) + "/index.js");
  // fs.mkdir(path.dirname(__filename) + "/test", (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Folder created");
  //   }
  // });
  // res.end("Welcome altschoolers!");
});

server.listen(8000, null, null, () => {
  console.log("Server is running on port 8000");
});
