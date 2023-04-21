// console.log("Hi virendra how are you ?");
// let arr = [12, 35, 1, 10, 34, 1, 35];
// let max1 = -Infinity;
// let max2 = -Infinity;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max1){
//         max2=max1;
//         max1=arr[i]
//     }
//     else if(arr[i]>max2&&arr[i]!=max1){
//         max2=arr[i]
//     }
// }
// console.log(max2);

// function revNum(num){
//     let revNum = 0;
//     while(num>0){
//         revNum = (revNum*10) + (num%10)
//         num=Math.floor(num/10);
//     }
//     return revNum
// }
// console.log(revNum(12345));

// let a = 10;
// let b = 20;
// [b,a]=[a,b];
// console.log(a);
// console.log(b);

// let str1 = "india";
// let str2 = "aisin";
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

// let str = "virendra";
// let newStr = "";
// for(let i=str.length-1; i>=0; i--){
//     newStr+=str[i]
// }
// console.log(newStr);

// let arr = [2,5,9,1];
// let miss = [];
// let sortArr = arr.sort((a,b)=>{
//     return a-b
// });
// for(let i=0; i<sortArr.length; i++){
//     let diff = arr[i+1]-arr[i];
//     if(diff>1){
//         for(let j=1; j<diff; j++){
//            miss.push(arr[i]+j)
//         }
//     }
// }
// console.log(miss);