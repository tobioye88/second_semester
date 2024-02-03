// function that takes in request, response and next
const logger = (req, res, next) => {
  console.log("Request", {
    url: req.url,
    method: req.method,
    time: new Date(),
    body: req.body,
    query: req.query,
    params: req.params,
  });
  next();
};

module.exports = logger;
