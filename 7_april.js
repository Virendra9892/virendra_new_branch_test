// class Node{
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

// let list1 = new Node(1);
// list1.addData(2);
// list1.addData(3);
// list1.addData(4);
// let list2 = new Node(5);
// list2.addData(1);
// list2.addData(2);
// list2.addData(3);
// // console.log(list1);
// // console.log(list2);
// for(let i = list1.head; i!=null; i=i.next){
//     for(let j=list2.head; j!=null; j=j.next){
//         if(i.value==j.value){
//             console.log(i.value);
//         }
//     }
// }

// let num = 121;
// function revNum(num){
//   let reverse = 0;;/
//   while(num>0){
//     reverse = (reverse*10) + (num%10);
//     num = Math.floor(num/10)
//   }
//   // console.log(reverse)
//   if(reverse===num){
//     console.log("the given number is pallindrome number")
//   }
// }
// revNum(num)