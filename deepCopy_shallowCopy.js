// console.log("hi virendra good morning.....");
// let arr = [12, 35, 1, 10, 34, 1, 35]
// let max1 = -Infinity;
// let max2 = -Infinity;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max1){
//         max2=max1;
//         max1=arr[i];
//     }
//     else if(arr[i]>max2 && arr[i]!=max1){
//         max2=arr[i]
//     }
// }
// console.log(max2)
//  let arr = [4,6,8,1];
//  let arr1 = arr.sort();
//  let miss = [];
//  for(let i=0; i<arr1.length; i++){
//     let diff = arr1[i+1]-arr1[i];
//     if(diff>1){
//         for(let j=1; j<diff; j++){
//             miss.push(arr1[i]+j)
//         }
//     }
//  }
//  console.log(miss)

// let arobj = {
//     id:1,
//     name:"virendra",
//     class:"bsc-it"
// }

// let arobj1 = {...arobj};
// let arobj1 = arobj;

// arobj1.class = "msc-it";
// console.log("origi=",arobj.class);
// console.log("new=",arobj1.class);

// let newObj = Object.assign({},arobj);
// newObj.name = "pathak";

// console.log("new = ",newObj.name);
// console.log("oring = ",arobj.name);

// let obj = {
//     id:1,
//     food:{
//         name:"dosa"
//     }
// }

// let newObj = {...obj};
// newObj.food.name = "idly";
// obj.food.name = "samoasa";
// console.log("original = ",obj);
// console.log("new = ",newObj)

// let newObj = JSON.stringify(obj);
// console.log(newObj);
// console.log(typeof(newObj));
// let newObj1 = JSON.parse(newObj);
// console.log(newObj1);
// newObj1.food.name = "pasta";
// console.log(newObj1);
// console.log(obj);

// let arr = [1,2,3,[10,20,30,40],5];
// // let newArr = [...arr];
// let newArr = JSON.parse(JSON.stringify(arr))
// newArr[3][0] = 12;
// console.log("new = ",newArr[3][0]);
// console.log("original = ",arr[3][0]);