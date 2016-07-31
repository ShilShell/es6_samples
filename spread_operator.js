var nums = [1, 2, 3];
console.log(nums);//[1, 2, 3]
console.log(...nums);//1 2 3

//--------------------------------------------
function makeArrayOfTwo(a, b) {
  return [b, a];
}

var nums = [1, 2, 3];
console.log(makeArrayOfTwo(nums[0], nums[1]));//[2, 1]
console.log(makeArrayOfTwo(...nums));//[2, 1]

//--------------------------------------------

var numArrayOne = [1, 2, 3];
var numArrayTwo = [4, 5, 6];

var nums = [...numArrayOne, ...numArrayTwo];
console.log(nums);//[1, 2, 3, 4, 5, 6]