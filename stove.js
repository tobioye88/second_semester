function stove(pot) {
  const obj1 = {
    name: "pot",
    color: "red",
    size: "small",
  };
  const obj2 = {
    name: "stove",
    color: "black",
    size: "large",
  };
  pot(obj1, obj2);
}

module.exports = stove;
