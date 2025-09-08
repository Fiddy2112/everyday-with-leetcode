// resolution
// 1. Check if the quantity of that number is even or not
// 2. how to check ?
//  first will run 1 loop get the value and assign it to a variable
//, then get the length of that variable,
// 3. if that variable is 1 -> odd number,
//4. otherwise if that variable is 2 or 4 or 6,... even number
//5. then get the assigned variable ++

function findNumbers(nums: number[]): number {
  let digitCount = 0;
  for (let num of nums) {
    const numDigits = String(num).length;
    if (numDigits % 2 === 0) {
      digitCount++;
    }
  }
  return digitCount;
}

// method 2
function findNumbers2(nums: number[]): number {
  const result = nums.filter((n) => {
    const digitCount = String(n).length;
    return digitCount % 2 === 0;
  }).length;

  return result;
}
