// function test(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(2)
//         },1000)
//     })
// }

// async function test1(){
//     console.log(1);
//     let out = await test();
//     console.log(out);
//     console.log(3);
// }
// test1();


// let arr = [1,0,null,undefined,NaN,"gf"];
let arr = [
    {
        id:1,
        name:"virendra"
    },
    {
        id:2,
        name:"shubham"
    },
    {
        id:3,
        name:"arpit"
    },
    {
        id:4,
        name:"kinjal"
    }
]

// //  let 
// arr[4] = {id:5,name:"shwetank,srishti"};
// console.log(arr);
// console.log(arr);

// let out= arr.map((e)=>{
//     if(e.id==2){
//        return e.name= "shubham pathak";
//     }
// })
// console.log(out[1]);
// console.log(arr);

let emp = {};
for(let i = 0; i<arr.length; i++){
    emp[arr[i].name]=arr[i].id

}
console.log(emp);


// class Node {
//     constructor(data, next) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class singlyLinkedList {
//     constructor(data, next) {
//       this.head = null;
//     }
  
//     insertayBegining(data) {
//       const node = new Node();
//       node.data = data;
//       if (!this.head) {
//         this.head = node;
//       } else {
//         node.next = this.head;
//         this.head = node;
//       }
//     }
  
//     print(data) {
//       for (let i = this.head; i != null; i = i.next) {
//         console.log(i.data);
//       }
//     }
//   }
  
//   const sl = new singlyLinkedList();
//   sl.insertayBegining(3);
//   sl.insertayBegining(2);
//   sl.insertayBegining(1);
//   sl.print();