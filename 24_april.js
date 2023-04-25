// let arr = [1,1,2,3,4,5,1,1,1,2,2,2];
// let duplicate = [];
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]==arr[j]&&!duplicate.includes(arr[i])){
//             duplicate.push(arr[i])
//         }
//     }
// }
// console.log("duplicate = ",duplicate);
// let duplicate = arr.filter((ele,ind)=>{
//     return arr.indexOf(ele)==ind && arr.lastIndexOf(ele)!=ind
// })
// console.log(duplicate);

// let num = 64;
// let sqrt = num**(1/2);
// console.log(sqrt);

// function fibo(num){
//     if(num<2){
//         return num
//     }
//     else{
//         return fibo(num-1) + fibo(num-2);
//     }
// }
// let num = 5;
// for(let i=0; i<num; i++){
//     console.log(fibo(i));
// }

// let n1 = 0;
// let n2 = 1;
// let nextTerm;
// for(let i=0; i<5; i++){
//     console.log(n1);
//     nextTerm=n1+n2;
//     n1=n2;
//     n2=nextTerm;
// }

// let arr = [80, 60, 10, 50, 30, 100, 0, 50]
// let emp = [];
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]+arr[j]==100){
//             emp.push(arr[i],arr[j])
//         }
//     }
// }
// console.log(emp);

// class node{
//     constructor(data){
//         this.head = {
//             value:data,
//             next:null
//         }
//         this.tail=this.head
//     }
//     addData(newData){
//         let newNode = {
//             value:newData,
//             next:null
//         }
//         this.tail.next= newNode,
//         this.tail=newNode
//     }
// }

// let list1 = new node(1);
// list1.addData(2);
// list1.addData(3);
// list1.addData(4);

// let list2 = new node(5);
// list2.addData(6);
// list2.addData(1);
// list2.addData(2)

// for(let i=list1.head; i!=null; i=i.next){
//     for(let j=list2.head; j!=null; j=j.next){
//         if(i.value==j.value){
//             console.log(i.value);
//         }
//     }
// }

// primitive and non premiteve data types in js

// let str = "javascript";
// let newStr = "";
// console.log(str[1]);
// str[0] = "Jaaa";
// console.log(str);
// for(let i=str.length-1; i>=0; i--){
//     newStr+=str[i]
// }
// console.log(newStr);

// function test(a){
//     console.log("first");
//     a(function test1(cv){
//         console.log("this is another callback example."); 
//         cv()
//     },
//     console.log("second")
//     )
//     console.log("fourth");
// }
// test((b)=>{
//     b(()=>{
//         console.log("this is 2nd callback");
//     });
//     console.log("third");
      
// })

function temp(a,cb){
    console.log(a);
    cb(()=>{
        console.log("cb2");
    })
    console.log("cb4");
}
temp(12,(cb2)=>{
    console.log("cb3");
    cb2()
    console.log("cb");
})