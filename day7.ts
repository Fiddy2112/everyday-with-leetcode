// resolution
// First, check if the array is empty; if so, return 0
// Initialize pointer j to track the position of the last unique element
// Loop through the array with index i from 0 to the end
// If the current element nums[i] is different from nums[j] (the last unique one),
// it means we found a new unique element
// We increment j and assign nums[j] = nums[i] to move the unique element forward
// After the loop ends, j + 1 represents the total number of unique elements
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
