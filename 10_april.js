// let obj = {
//     id:1,
//     name:["virendra","shubham","arpit","kinjal"],
//     class:"bsc-it"
// }
// let obj1 = obj;
// obj1.name = "shubham";
// console.log(obj1);
// console.log(obj,":::::");
// let obj1 = {...obj};
// obj1.name[1] = "sintu";
// console.log(".........",obj1);
// console.log(obj);
// let parseObj = JSON.stringify(obj)
// // console.log(parseObj);
// let obj1 = JSON.parse(parseObj);
// // console.log(obj1)
// obj1.name[1] = "shubham pathak";
// console.log(obj,".............");
// console.log(obj1,";;;;;;;;;;;;;;;;;");

// 11_april.js
// fibonacci series with recursion./////
// function fibo(num){
//     if(num<2){
//         return num;
//     }
//     else{
//         return fibo(num-1)+fibo(num-2)
//     }
// }
// let num=2;
// if(num<0){
//     console.log("please enter positive number.");
// }
// else{
//     for(let i=0;i<num;i++){
//         console.log(fibo(i));
//     }
// }

// Code to find sqrt of number.//

// let num = 16;
// let sqrt = num**(1/2);
// console.log(sqrt);

// code to find even number in list.
// let number = [1,2,4,5,6,7,8,9,3];
// let even = [];
// let odd = [];
// for(let i=0; i<number.length; i++){
//     if(number[i]%2==0){
//         even.push(number[i])
//     }
//     else{
//         odd.push(number[i])
//     }
// }
// console.log(even);
// console.log(odd);

// prime number 1 to n
// let num = 20;
// let prime = [];
// for(let i=0; i<num; i++){
//     let flag = true;
//     for(let j=2; j<=Math.sqrt(i); j++){
//         if(i%j==0){
//             flag=false;
//             break;
//         }
//     }
//     if(flag && i>1){
//         prime.push(i)
//     }
// }
// console.log(prime);
// let arr = [1,2,true,false,[],{},"",null,undefined,0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]||arr[i]===0){
//         console.log(arr[i]);
//     }
// }

// let flag = false;

// setTimeout(()=> {
//     flag=true;
// }, 1000);

// while(flag){
//     console.log("hello world");
// }