/*
function moveZero(array) {
  let zeroArrays = [];
  let normArrays = [];
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (number == 0) {
      zeroArrays.push(number);
    }
  }

  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (number !== 0) {
      normArrays.push(number);
    }
  }
  return normArrays.concat(zeroArrays);
}
console.log(moveZero([0,1,0,30,0,5]));
*/

function moveZero(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++;
        } else if (count > 0) {
            nums[i - count] = nums[i];
            nums[i] = 0;
        }
    }
}

let nums = [0, 1, 0, 30, 0, 5];
moveZero(nums);
console.log(nums);