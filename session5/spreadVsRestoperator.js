// spread operator 
var arr=[5,8,9]
function sum(a,b,c){
    console.log(a+b+c);
}
sum(...arr)

// rest operator
function hello(...num){
    console.log(num);
}
hello(21,32,56,89,2,4,23,65,12);