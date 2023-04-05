function test(val1,val2,val3,val4){
    let a = val1?val1:0
    let b = val2?val2:0
    let d = val3?val3:0;
    let e = val4?val4:0;
    let c = a+b;
    let f = d-e;
    console.log("sub = ",f);
}
module.exports = {test};