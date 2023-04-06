// console.log("hi virendra good morning.....");
// let arr = [12, 35, 1, 10, 34, 1, 35];
// let max1 = -Infinity;
// let max2 = -Infinity;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max1){
//         max2=max1;
//         max1=arr[i]
//     }
//     else if(arr[i]>max2&&arr[i]!=max1){
//         max2=arr[i];
//     }
// }
// console.log(max2);

// function revNumber(num){
//     let revNumber = 0;
//     while(num>0){
//         revNumber = (revNumber*10)+(num%10);
//         num = Math.floor(num/10)
//     }
//     return revNumber
// }
// console.log(revNumber(12345));

// let a = 12;
// let b = 23;
// [a,b]=[b,a];
// console.log("a = ",a);
// console.log("b = ",b);

// let str1 = "india";
// let str2 = "adini";
// if(str1.length!==str2.length){
//     console.log("both string are not equal length.....");
// }
// else{
//     let str3 = str1.split("").sort().join("");
//     let str4 = str2.split("").sort().join("");
//     if(str3==str4){
//         console.log("both string are anagram string.....");
//     }
//     else{
//         console.log("both string are not anagram string.....");
//     }
// }

// let arr = [11,2,5,9,11,1,2]
// let arr1 = arr.sort((a,b)=>{
//     return a-b;
// })
// let miss = [];
// for(let i=0; i<arr1.length; i++){
//     let diff = arr[i+1]-arr[i];
//     if(diff>1){
//         for(let j=1; j<diff; j++){
//             miss.push(arr[i]+j);
//         }
//     }
// }
// console.log(miss);

// let str = "naan";
// let newStr = "";
// for(let i=str.length-1; i>=0; i--){
//     newStr+=str[i];
// }
// if(str==newStr){
//     console.log("both string are pallindrome string....");
// }
// else{
//     console.log("both string are not pallindrome string...");
// }

// let arr = [1,12,5,12,10,1,12,5,1,1,12,5,5];
// let duplicate = arr.filter((ele,index)=>{
//     return arr.indexOf(ele)==index&&arr.lastIndexOf(ele)!=index
// })
// console.log(duplicate);
// let duplicate = [];
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]==arr[j]&&!duplicate.includes(arr[i])){
//              duplicate.push(arr[i])
//         }
//     }
// }
// console.log(duplicate);

// class Node{
//     constructor(data){
//         this.head = {
//             value:data,
//             next:null
//         },
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
// let list1 = new Node(1);
// list1.addData(2);
// list1.addData(3);
// list1.addData(4);
// list1.addData(5);
// let list2 = new Node(5);
// list2.addData(6);
// list2.addData(7);
// list2.addData(2);
// list2.addData(4);
// list2.addData(1)
// for(let i=list1.head; i!=null; i=i.next){
//     for(let j=list2.head; j!=null; j=j.next){
//         if(i.value==j.value){
//             console.log(i.value);
//         }
//     }
// }
// let str = "virendra";
// let newStr ="";
// for(let i=str.length-1; i>=0; i--){
//     newStr+=str[i];
// }
// console.log(newStr);


// function 