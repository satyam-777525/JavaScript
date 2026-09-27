//1.function decleration
function name(){
    console.log("hello ji")
}
name()

//2.function expression
const greet=function (a,b){
    console.log(a-b);
}
greet(10,20)

//3.arrow function
const div=()=>{
    console.log("helllo")
}
div();


const bhag=(a,b)=>{
    console.log(a+b);
}
bhag(100,500)

var l=(a,b)=>{
   return a+b;
}
console.log(l(20,30));



const df=(a,b)=> a+b;
 console.log(df(20,258))

//  4.callback function

 function nam(a,b){
    console.log(a);
    b()

 }
 nam("satyam",function(){
    console.log("hello ji ")
 })

//  secound example
 function faddu(){
    console.log("phat gyi");
 }
 function gaddi(){
    console.log("gad gyi")
 }

 function ramji(a,b,c){// ramji is higher order function because it takes function
    console.log(a);
    c();
    b();
 }
 ramji("anisha",faddu,gaddi) //faduu and gaddi is callback function 

//  5.anonymous function and 6. immediately ivoked function 
 (function(){
    console.log("asdfghjkl")
 })();