const express = require("express");
const bookRoute = require("./routes/books.route");
const authorRoute = require("./routes/author.route");

const app = express();

// MiddleWare
app.use(express.json());
app.use("/books", bookRoute);
app.use("/authors", authorRoute);

app.get("/", (req, res) => {
  res.jsonp({ message: "Hello World" });
});

app.all("*", (req, res) => {
  res.status(404).jsonp({ message: "Page not found" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000: Express.js");
});
