// let arr = [12, 14, 5, 6, 7, 8, 9, 12, 3, 4];
// let res = [],
//   checkCount = 0;
// for (let i = 0; i < arr.length; i++) {
//   let count = 1;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       count++;
//     } else {
//       if (count > checkCount) {
//         res = []
//         for (let k = i; k < j; k++) {
//           res.push(arr[k]);
//         }
//       }
//       i = j-1;
//       break
//     }
//   }
// }
// console.log(res);

let arr = [12, 14, 5, 6, 7, 8, 9, 12, 3, 4];
let res = [],
  checkCount = 0;
let i = 0;
while (i < arr.length) {
  let count = 1;
  let j = i + 1;
  while (j < arr.length && arr[j] > arr[j - 1]) {
    count++;
    j++;
  }
  if (count > checkCount) {
    res = arr.slice(i, i + count);
    checkCount = count;
  }
  i = j;
}
console.log(res);