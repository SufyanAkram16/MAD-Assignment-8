// 1. Write a ts program to read and print elements of array.
// var array:string [] = ["a","ab","abc", "abcd"];
// array.forEach(Element => {
//     console.log(Element);
// });
// 2. Write a ts program to print all negative elements in an array.
// const negElements = (a:number[]) => {
//     const negArray:number[] = [];
//     for( let i=0; i< a.length; i++) {
//         if(a[i] < 0){
//             negArray.push(a[i]);
//         }
//     }
//     negArray.forEach(Element => {
//         console.log(Element);
//     })
// } 
// negElements([12, 13, -78, -7, -9 , 12, -9])
// 3. Write a ts program to find sum of all array elements. 
// const sumArray = (x:number[]) => {
//     let sum = 0;
//     for( let i=0; i<x.length; i++){
//         sum += x[i];
//     }
//     console.log(sum);
// }
// sumArray([1,2,15,15,14,18,19]);
// 4. Write a ts program to find maximum and minimum element in an array.
// const maxMinNum = (x:number[]) => {
//     let min:number = x[0];
//     let max:number = x[0];
//     for(let i=1; i<x.length; i++){
//         if(x[i] < min) {
//             min = x[i];
//         }
//     }
//     for(let i=1; i<x.length; i++){
//         if(x[i] > max) {
//             max = x[i];
//         }
//     }
//     console.log("Minimum number is:" + min);
//     console.log("Maximum number is:" + max);
// }
// maxMinNum([1,2,3,4,5,6,7,8,9]);
// 5. Write a ts program to find second largest element in an array.
// const secondLargestNum = (x:number[]) => {
//     let first = 0;
//     let second = 0;
//     for (let i = 0; i < x.length; i++) {
//         if(x[i] > first){
//             second = first;
//             first = x[i];
//         }
//     }
//     console.log("Second largest number in the array is: " + second);
// }
// secondLargestNum([1,2,3,4,5,6,8,8.5,9])
// 6. Write a ts program to count total number of even and odd elements in an array.
// const evenOdd = (x:number[]) => {
//     let even = 0;
//     let odd = 0;
//     for(let i=0; i < x.length; i++){
//         if(x[i] % 2 == 0){
//             even += 1;
//         }else {
//             odd += 1;
//         }
//     }
//     console.log("The total number of even elements in array is: " + even);
//     console.log("The total number of odd elements in array is: " + odd);
// }
// evenOdd([1,2,3,4,5,6,7,8,9,10,11]);
// 7. Write a ts program to count total number of negative elements in an array.
// const findNegNum = (x:number[]) => {
//     let negNum = 0;
//     for(let i=0; i<x.length; i++){
//         if(x[i] < 0){
//             negNum += 1;
//         }
//     }
//     console.log("The total number of negative elements in an array is: " + negNum);
// }
// findNegNum([1,-1,2,3,4,5,-2])
// 8. Write a ts program to copy all elements from an array to another array.
// const copyArray = (x:number[], y:number[]) => {
//     let arr1 = x;
//     let arr2 = y;
//     for(let i=0; i<arr2.length; i++) {
//         arr1.push(arr2[i]);
//     }
//     console.log(arr1);
// }
// copyArray([1,2,5,7,9],[3,4,6,8]);
// 9. Write a ts program to insert an element in an array.
// const insertElement = (x:number[], elementToPush:number) => {
//     x.push(elementToPush);
//     console.log(x);
// }
// insertElement([1,2,3,4,5], 7)
// 10. Write a ts program to delete an element from an array at specified position.
// const deleteElement = (x:number[]) => {
//     x.pop();
//     console.log(x);
// }
// deleteElement([1,2,3,4,5,6,7,8,9,]);
// 11. Write a ts program to count frequency of each element in an array.
// const arr = ['a', 'b', 'a', 'a', 'c', 'c'];
// const count = {};
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   if (count[element]) {
//     count[element] += 1;
//   } else {
//     count[element] = 1;
//   }
// }
// console.log(count);
// 12. Write a ts program to print all unique elements in the array.
// 13. Write a ts program to count total number of duplicate elements in an array.
// 14. Write a ts program to delete all duplicate elements from an array.
// 15. Write a ts program to merge two array to third array.
// 16. Write a ts program to find reverse of an array.
// 17. Write a ts program to put even and odd elements of array in two separate array.
// 18. Write a ts program to search an element in an array.
// 19. Write a ts program to sort array elements in ascending or descending order.
// 20. Write a ts program to sort even and odd elements of array separately.
// 21. Write a ts program to left rotate an array.
// 22. Write a ts program to right rotate an array.
