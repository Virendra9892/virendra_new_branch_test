// let arr = [12, 35, 1, 10, 34, 1, 35]
// let max1 = -Infinity;
// let max2 = -Infinity;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max1){
//         max2=max1;
//         max1=arr[i];
//     }
//     else if(arr[i]>max2&&arr[i]!=max1){
//         max2=arr[i]
//     }
// }
// console.log(max2);

// function rev(num){
//     let revNum = 0;
//     while(num>0){
//       revNum = revNum*10 + num%10
//       num = Math.floor(num/10)
//     }
//     return revNum
// }
// console.log(rev(12345));

// let str1 = "india";
// let str2 = "adiin";
// if(str1.length!=str2.length){
//     console.log("both string length are not equal.");
// }
// else{
//     let str3 = str1.split('').sort().join("");
//     let str4 = str2.split("").sort().join("");
//     if(str3==str4){
//         console.log("both string are anagram string");
//     }
//     else{
//         console.log("both string are not anagram string");
//     }
// }

// let arr = [2,5,2,9,7];
// let arr1 = arr.sort((a,b)=>{
//     return a-b
// });
// // console.log(arr1);
// let miss= [];
// for(let i=0; i<arr1.length; i++){
//     let diff = arr1[i+1]-arr1[i];
//     if(diff>1){
//         for(let j=1; j<diff; j++){
//             miss.push(arr1[i]+j)
//         }
//     }
// }
// console.log(miss);

// let str = "virendra";
// console.log(str.length);
// let newStr = "";
// for(let j=str.length-1; j>=0; j--){
//     newStr+=str[j]
// }
// console.log(newStr);

// pallindrome string

// let str = "masdam";
// let newStr = "";
// for(let i=str.length-1; i>=0; i--){
//     newStr+=str[i];
// }
// if(str==newStr){
//     console.log("both string are pallindrome string....");
// }
// else{
//     console.log("both string are not pallindorm string....");
// }

// function fibo(num){
//     if(num<2){
//         return num;
//     }
//     return fibo(num-1)+fibo(num-2);
// }
// let number = 7;
// if(number<0){
//     console.log("please enter positive number.");
// }
// else{
//     for(let i=0; i<number; i++){
//         console.log(fibo(i));
//     }
// }

// let n1 = 0;
// let n2 = 1;
// let nextTerm;
// for(let i=0; i<5; i++){
//     console.log(n1);
//     nextTerm=n1+n2;
//     n1=n2;
//     n2=nextTerm
// }

// let n = 20;
// let primes = [];
// for(let i=0; i<n; i++){
//     let prime = true;
//     for(let j = 2; j<=Math.sqrt(i); j++){
//         if(i%j==0){
//             prime=false;
//             break;
//         }
//     }
//     if(prime && i>1){
//         primes.push(i)
//     }
// }
// console.log(primes);

// let arr = [3,3,3,2,1,1,1,3,5,3,4,2,2,2];
// let duplicate = [];
// for(let i=0; i<arr.length; i++){
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[i]==arr[j]&&!duplicate.includes(arr[i])){
//             duplicate.push(arr[i])
//         }
//     }
// }
// console.log(duplicate);
// let duplicate = arr.filter((ele,ind)=>{
//     return arr.indexOf(ele)==ind && arr.lastIndexOf(ele)!=ind
// })
// console.log(duplicate);

// let arr = [80, 60, 10, 50, 30, 100, 0, 50];

// class node{
//     constructor(data){
//         this.head = {
//             value:data,
//             next:null
//         }
//         this.tail = this.head;
//     }
//     addData(newData){
//         let newNode = {
//             value:newData,
//             next:null
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//     }
// }
// let list1= new node(1);
// // console.log(list1);
// list1.addData(2);
// list1.addData(3);
// list1.addData(4);
// let list2  = new node(5);
// list2.addData(6);
// list2.addData(1);
// list2.addData(4);

// for(let i=list1.head; i!=null; i=i.next){
//     for(let j=list2.head; j!=null; j=j.next){
//         if(i.value==j.value){
//             console.log(i.value);
//         }
//     }
// }