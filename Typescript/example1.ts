function show1(name){
    console.log(name);
}

function addNum(n1:number, n2:number){
    return n1+n2;
}
let sum:any;
var nm='LTI';
let num1=10;    //block scoped
let num2:number=20;
let arr:string[]=["India","US","Russia"];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
show1(nm);
sum=addNum(num1,num2);
console.log('Sum = '+sum);