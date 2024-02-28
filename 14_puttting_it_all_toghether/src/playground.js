const sum = (var1, var2) => {
  return var1 + var2;
};

const coolSum = (var1) => {
  return (var2) => {
    return var1 + var2;
  };
};

const result = coolSum(3)(4);
console.log(result); // 7

const result2 = coolSum(3);
console.log(result2(4)); // 7

const result3 = coolSum(5)(6);
