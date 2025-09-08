/**
 Do not return anything, modify nums1 in-place instead.
 */

//  solution
// 1. Create a pointer p1 = m - 1 for the end of valid elements in nums1
// 2. Create a pointer p2 = n - 1 for the end of nums2
// 3. Create a pointer p = m + n - 1 to fill nums1 from the end
// 4. While both p1 and p2 are valid (>= 0), compare nums1[p1] and nums2[p2]
//    - Place the larger value at nums1[p]
//    - Move the corresponding pointer (p1 or p2) and p backward
// 5. After the loop, if there are remaining elements in nums2
//    - Copy them into nums1 (they are smaller than all existing values)
// Note: No need to copy remaining nums1 values — they’re already in place
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}
