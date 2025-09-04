// resolution
// If the next number in the array is 0, the result will be 0,
// otherwise if it is non-zero, it will be ++

function findMaxConsecutiveOnes(nums: number[]): number {
  let maxCount = 0;
  let numberCount = 0;

  for (let num of nums) {
    if (num === 1) {
      numberCount++;
      maxCount = Math.max(maxCount, numberCount);
    } else {
      numberCount = 0;
    }
  }

  return maxCount;
}
