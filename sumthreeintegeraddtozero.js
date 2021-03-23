const prompt = require('prompt-sync')({sigint:true});
let arraysize = prompt('enter the array size');
let array = [];
for(let l=0;l<arraysize;l++){
array[l] = prompt('enter the array element');
}
for(var i=0;i<arraysize;i++){

    var first = array[i];
}
for(var j=i+1;j<arraysize;j++){
    var second = array[j];
}
for(var k=j+1;j<arraysize;k++){
    var third = array[k];
}
var sum =first+second+third;
if(sum == 0){

console.log(first+second+third);
}else{
    
    console.log('no any values for zero');
}