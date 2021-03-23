let num1 = Math.floor(Math.random()*100+100);
let num2 = Math.floor(Math.random()*100+100);
let num3 = Math.floor(Math.random()*100+100);
let num4 = Math.floor(Math.random()*100+100);
let num5 = Math.floor(Math.random()*100+100);
let num6 = Math.floor(Math.random()*100+100);
let num7 = Math.floor(Math.random()*100+100);
let num8 = Math.floor(Math.random()*100+100);
let num9 = Math.floor(Math.random()*100+100);
let num10 = Math.floor(Math.random()*100+100);

let array = [num1,num2,num3,num4,num5,num6,num7,num8,num9,num10]
console.log(array);
for(let i=0;i<10;i++){

    for(let j=i+1;j<10;j++){

        if(array[i]>array[j]){
            let temp =array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log('sorted array is :');
for(let k=0;k<10;k++){
    console.log(array[k]);
}
console.log('second smallest element is :'+array[1]);
console.log('second largest element is :'+array[8]);