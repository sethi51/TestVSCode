function show1(name) {
    console.log(name);
}
function addNum(n1, n2) {
    return n1 + n2;
}
var sum;
var nm = 'LTI';
var num1 = 10; //block scoped
var num2 = 20;
var arr = ["India", "US", "Russia"];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
show1(nm);
sum = addNum(num1, num2);
console.log('Sum = ' + sum);
