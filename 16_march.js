// console.log("");
// first class function.
// let first = ()=>{
//     console.log("hii virendra");
// }
// first();

// let second = function(){
//     console.log("this is anonymous function in js");
// }
// second();

// function test(){
//     return "hi";
// }
// function test1(){
//     return "good";
// }
// function test2


// function fact(n){
//     if(n==1){
//         return n
//     }
//    return fact(n-1)*n
// }
// console.log(fact(5))

// let n = 5;
// let fact = 1;
// for(let i = 1; i<=5; i++){
//      fact=fact*i
// }
// console.log(fact);


// let str = "virendra";
// let newStr = ""
// for(let i = str.length-1; i>=0; i--){
//       newStr+=str[i]
// }
// console.log(newStr);

// let arr = [12,2,-3,4,5];
// let max1 = -Infinity;
// let max2 = -Infinity;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>max1){
//         max2=max1;
//         max1=arr[i]
//     }
//     else if(arr[i]>max2&&arr[i]!=max1){
//         max2=arr[i]
//     }
// }
// console.log(max2);


// function fact(n){
//     if(n>1){
//         console.log("please enter po");
//     }
// }

// let arr = [1,2,3,4,5];


// function test(arr,sign){
//    arr.reduce((acc,curr)=>{
//        return eval( acc+sign+curr)
        
//     });   
// }

// console.log(test([1,2,3,4,5],"+"));

// function test(arr,sign){
//     return arr.reduce((acc,curr)=>{
//         return eval( acc+sign+curr)
//      });   
//  }
 
//  console.log(test([1,2,3,4,5],"*"));


// function test(arr,sign){
//     let val1 = arr[0];
//     for(let i = 1; i<arr.length; i++){
//         switch(sign){
//             case "+":val1+=arr[i];
//             break;
//             case "-":val1-=arr[i];
//             break;
//             case "*":val1*=arr[i];
//             break;
//             case "/":val1/=arr[i];
//             break;
//         }
       
//     }
//     console.log(val1);
// }
// test([1,2,3,4,5],"*");




// console.log(3);
// setTimeout(()=>{
//     console.log(2);
// })
// setTimeout(()=>{
//     console.log(1);
// })
// setImmediate(()=>{
//     console.log(4);
// })


