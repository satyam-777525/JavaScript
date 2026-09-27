var person={
    fname:"satyam",
    lname:"varshney",
    age:20
}

for(let item in  person){
    console.log(person[item]);
}
var c=Object.getOwnPropertyDescriptors(person)
console.log(c)

Object.defineProperty(person,"fname",{
    value:"mohit",
    enumerable:false
})
var c=Object.getOwnPropertyDescriptors(person)
console.log(c)

for(let item in  person){
    console.log(person[item]);
}
