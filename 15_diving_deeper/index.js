const twoSum = function (nums, target) {
  // Brute force solution
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }

  // Optimized solution
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    // if the number is in the map
    // return the index of the inverse and the current index
    // otherwise add the current number to the map
    if (map[nums[i]] !== undefined) {
      return [i, map[nums[i]]];
    } else {
      const diff = target - nums[i];
      map[diff] = i;
    }
  }
};
// nums = [2,7,11,15], target = 9
// console.log(twoSum([2, 7, 11, 15], 9)); // [1, 0]
// console.log(twoSum([3, 3], 6)); // [1, 0]
console.log(twoSum([13, 2, 77, 21, 4, 7, 11, 15], 9)); // [1, 0]
// solved
