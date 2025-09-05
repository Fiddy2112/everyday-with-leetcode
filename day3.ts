// resolution
// Create an empty array to store the results.
// Iterate through each element in nums:
// Use Math.pow(num, 2) or num * num to square.
// push into the result array.

function sortedSquares(nums: number[]): number[] {
  let squares = [];
  for (const num of nums) {
    squares.push(Math.pow(num, 2));
  }

  squares.sort((a, b) => a - b);

  return squares;
}
