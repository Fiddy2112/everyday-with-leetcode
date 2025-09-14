// resolution
// Iterate through each pair of elements in the array using two nested loops
// For each pair (i, j), check that the indices are not the same (i !== j)
// Then check if arr[i] is exactly double the value of arr[j]
// If such a pair is found, return true immediately
// If no such pair is found after checking all combinations, return false
function checkIfExist(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] == 2 * arr[j]) {
          return true;
        }
      }
    }
  }
  return false;
}
