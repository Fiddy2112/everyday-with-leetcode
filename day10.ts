//resolution
// Start by initializing a variable 'maxRight' to -1. This variable will track the greatest element found to the right of the current element.
// Traverse the array from right to left (starting from the last index).
// For each element, update the current element to be the 'maxRight' value.
// After updating the current element, update 'maxRight' to the maximum of 'maxRight' and the current element.
// By the end of the loop, the array will be updated with the greatest element on the right side for each element,
// and the last element will be set to -1 as per the problem's requirement.
function replaceElements(arr: number[]): number[] {
  let n = arr.length;
  let maxRight = -1;

  for (let i = n - 1; i >= 0; i--) {
    let current = arr[i];
    arr[i] = maxRight;
    maxRight = Math.max(maxRight, current);
  }

  return arr;
}
