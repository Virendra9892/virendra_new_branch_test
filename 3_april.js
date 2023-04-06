// console.log("hey virendra good afternoon.");
// let arr = [12, 35, 1, 10, 34, 1, 35];
// let max1 = -Infinity;
// let max2 = -Infinity;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max1){
//         max2=max1;
//         max1=arr[i];
//     }
//     else if(arr[i]>max2&&arr[i]!=max1){
//         max2=arr[i];
//     }
// }
// console.log(max2);

// Reverse an integer without converting it to a string.

// function reverseNum(num){
//     let revNumber = 0;
//     while(num>0){
//         revNumber = revNumber*10 + num%10;
//         num = Math.floor(num/10);
//     }
//     return revNumber
// }
// console.log(reverseNum(12345));

// let str1 = "india";
// let str2 = "adnki";
// if (str1.length !== str2.length) {
//     console.log("both string are not equal length.....");
// }
// else {
//     let str3 = str1.split("").sort().join("");
//     let str4 = str2.split("").sort().join("");
//     if(str3==str4){
//         console.log("both string are anagram string.....");
//     }
//     else{
//         console.log("both string are not anagram string.....");
//     }
// }

// let arr = [11,2,4,6,9,12];
// let arr1 = arr.sort((a,b)=>{
//    return a-b
// });
// console.log(arr1);
// let miss = [];
// for(let i=0; i<arr1.length; i++){
//     diff = arr1[i+1]-arr1[i];
//     if(diff>1){
//         for(let j=1; j<diff; j++){
//             miss.push(arr1[i]+j);
//         }
//     }
// }
// console.log(miss);

// let str = "madaam";
// let newStr = "";
// for(let i=str.length-1; i>=0; i--){
//     newStr+=str[i]
// }
// console.log(newStr);
// if(str==newStr){
//     console.log("string are pallindrome string.");
// }
// else{
//     console.log("string are not pallindrome string.");
// }

// function fibo(n){
//     if(n<2){
//         return n
//     }
//     else{
//         return fibo(n-1) + fibo(n-2);
//     }
// }
// let num = 2;
// if(num<0){
//     console.log("please enter positive number.....");
// }
// else{
//     for(let i=0; i<num; i++){
//         console.log(fibo(i));
//     }
// }

// let n1 = 0;
// let n2 = 1;
// let nextTerm ;
// for(let i=0; i<5; i++){
//     console.log(n1);
//     nextTerm=n1+n2;
//     n1=n2;
//     n2=nextTerm;
// }

// find prime number form 1 to n.
// let num = 20;
// let prime = [];
// for(let i=0; i<num; i++){
//     let flag = true;
//     for(let j=2; j<=Math.sqrt(i); j++){
//         if(i%j==0){
//             flag=false;
//         }
//     }
//     if(i>1 && flag){
//         prime.push(i)
//     }
// }
// console.log(prime);