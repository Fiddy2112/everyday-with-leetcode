// resolution
// Step 1: Check if the array is empty. If so, return 0 because there are no elements.
// Step 2: Initialize a variable 'j' to track the position of unique elements.
// Step 3: Traverse the array with 'i'. If nums[i] is not equal to nums[j], increment 'j' and assign nums[j] = nums[i].
// Step 4: After finishing the loop, the unique elements will be at the beginning of the array.
// Step 5: Return 'j + 1' because 'j' represents the last unique element index, and we need the count of unique elements.
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
}
