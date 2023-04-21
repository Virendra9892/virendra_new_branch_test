// console.log("hi virendra good morning..");
// let a = [12,1,35,10,34,1,35];
// let max1 = -Infinity;
// let max2 = -Infinity;

// for(let i=0; i<a.length; i++){
//     if(a[i]>max1){
//         max2=max1;
//         max1=a[i];
//     }
//     else if(a[i]>max2&&a[i]!=max1){
//         max2=a[i]
//     }
// }
// console.log(max2);

// function revNum(num){
//     if(num<0){
//         return false 
//     }
//     let revNum = 0;
//     while(num>0){
//         revNum = revNum*10 + num%10;
//         num = Math.floor(num/10)
//     }
//     return revNum
// }
// let ans = revNum(-12345);
// console.log(ans);

// let str1 = "virendra";
// let str2 = "ardnivver";
// if(str1.length!=str2.length){
//     console.log("both string length are not equal.");
// }
// else{
//     let str3 = str1.split("").sort().join("");
//     let str4 = str2.split("").sort().join("");
//     if(str3==str4){
//         console.log("both string are anagram string.");
//     }
//     else{
//         console.log("both string are not anagram string.");
//     }
// }

// let arr = [5,2,7,9];
// let arr1 = arr.sort((a,b)=>{
//     return a-b
// })
// let miss = [];
// for(let i=0; i<arr1.length; i++){
//     let diff = arr1[i+1]-arr1[i];
//     if(diff>1){
//         for(let j=1; j<diff; j++){
//             miss.push(arr1[i]+j)
//         }
//     }
// }
// console.log(miss);

// 18_april.js

// 
// let number = 20;
// let arr = [];
// for(let i=0; i<number; i++){
//     let prime = true;
//     for(let j=2; j<=Math.sqrt(i); j++){
//         if(i%j==0){
//             prime=false;
//             break;
//         }
//     }
//     if(prime&&i>1){
//         arr.push(i)
//     }
// }
// console.log(arr);

// function fibo(n){
//     if(n<2){
//         return n
//     }
//    return fibo(n-1) + fibo(n-2);
// }
// let number = 0;
// if(number<0){
//     console.log("please enter positive number.");
// }
// else{
//     for(let i=0; i<number; i++){
//         console.log(fibo(i));
//     }
// }
