var person={
    name:"satyam",
    lname:"varshney",
    age:20
}

// object.keys(objectname)= return array of keys
var a =Object.keys(person)
console.log(a)

var a=Object.values(person)
console.log(a)

var a =Object.entries(person)
console.log(a)

// make array to object 
var detail=Object.fromEntries(a);
console.log(detail)

// assign object or copy object
var person2=Object.assign({},person)
console.log(person2)

// freeze() vs seal()
var shop={
    name:"amazon",
    workers:150,
    address:"hathras"
}

Object.freeze(shop);
shop.workers=50
delete shop.workers
console.log(shop)

// Object.seal(shop)
// shop.workers=200
// delete shop.workers
// console.log(shop)