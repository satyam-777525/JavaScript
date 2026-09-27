// let Vs Const Vs var

// var a=10;
// var a="satyam"
// console.log(a);

// let b="20"
//  b="varshney"
//  console.log(b)

//  const c=25
//  console.log(c)

//  var q;
//  console.log(q)

// let w;
//  console.log(w)

// const r;
//  console.log(r) this will give error



// scope of variables
//var-var bs function scope nhi hota h 
// global scope
var a=20;
{
    console.log(a)
}
// block scope

{
    var c=30;
}
console.log(c)
// function scope - this give error
function h(){
    var d=30;
}
// console.log(d);

// const or let same h 
// global scope
let f=56;
{
    console.log(f)
}
// block scope--gives error
{
    let s=20;
}
// console.log(s)
// function scope also give error 






 