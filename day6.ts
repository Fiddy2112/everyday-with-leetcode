// resolution
// create a variable k
// Iterate through each element of an array using a for loop
// If the current element is different from val, we write it to position k, then increment k.
// After the scan is complete, k is the number of elements that are not equal to val
function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
