//resolution
// Check if the array has at least 3 elements, otherwise it can't be a mountain
// Use a pointer 'i' to traverse the array from left to right
// First, move 'i' forward while the current element is strictly increasing
// After the increasing sequence ends, 'i' should not be at the first or last index
// Then, continue moving 'i' forward while the current element is strictly decreasing
// If 'i' reaches the end of the array, then the array is a valid mountain array
// Otherwise, return false
function validMountainArray(arr: number[]): boolean {
  let i = 0;

  while (i + 1 < arr.length && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i === 0 || i === arr.length - 1) {
    return false;
  }

  while (i + 1 < arr.length && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === arr.length - 1;
}
