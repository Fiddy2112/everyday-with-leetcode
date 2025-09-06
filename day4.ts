/**
 Do not return anything, modify arr in-place instead.
 */
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
