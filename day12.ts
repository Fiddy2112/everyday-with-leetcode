// resolution
// Step 1: Initialize a variable 'zeroIndex' to track where the next non-zero element should go.
// Step 2: Loop through the array from left to right, checking for non-zero elements.
// Step 3: For each non-zero element, swap it with the element at 'zeroIndex', and then increment 'zeroIndex'.
// Step 4: By the end of the loop, all non-zero elements will be at the start of the array, and all zeroes will be at the end.
// Step 5: The array will be modified in-place as per the problem's requirement.
function moveZeroes(nums: number[]): void {
  let zero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[zero], nums[i]] = [nums[i], nums[zero]];
      zero++;
    }
  }
}
