const behavior = (req, res) => {
  // res.writeHead(400, { "Content-Type": "text/html" });
  switch (req.url) {
    case "/":
      res.statusCode = 201;
      res.write("Hello from page root ");
      break;
    case "/about":
      res.write("Hello from page about");
      break;
    case "/contact":
      res.write("Hello from page contact");
      break;
    default:
      res.statusCode = 418;
      res.write("Hello from page " + req.url);
      break;
  }
  // set response status code
  // res.statusCode = 400;
  res.end();
};

module.exports = behavior;
// module.exports = { behavior }
