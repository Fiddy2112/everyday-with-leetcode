/**
 Do not return anything, modify arr in-place instead.
 */

// resolution
// 1. Count the number of zeros that can be duplicated without exceeding array length.
//    - While scanning, if a zero would go beyond the last index after duplication, handle it specially.
// 2. Start from the end of the "virtual" array (after considering duplications), and move backwards.
// 3. For each element from the end:
//    - If it's a zero, write zero twice at the correct shifted positions.
//    - Otherwise, write the element at its shifted position.
// 4. This avoids overwriting unprocessed elements and works in-place without using extra space.
// 5. Time complexity: O(n), Space complexity: O(1)
function duplicateZeros(arr: number[]): void {
  let originalLength = arr.length;
  let zero = 0;

  for (let i = 0; i < originalLength - zero; i++) {
    if (arr[i] === 0) {
      if (i === originalLength - zero - 1) {
        arr[originalLength - 1] = 0;

        originalLength -= 1;

        break;
      }

      zero++;
    }
  }

  let lastArray = originalLength - zero - 1;

  for (let i = lastArray; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + zero] = 0;
      zero--;
      arr[i + zero] = 0;
    } else {
      arr[i + zero] = arr[i];
    }
  }
}
