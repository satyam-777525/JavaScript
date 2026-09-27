//length
var arr=[1,2,4,"satyam"]
console.log(arr.length)

//indexof-give the index of element
var arr=[1,23,45,98,75,23]
console.log(arr.indexOf(23))

//includes
var arr=[1,23,45,98,75,23]
console.log(arr.includes(23))

// push - add at the end
var arr=[1,23,45,98,75,23]
arr.push(2)
console.log(arr)
arr.push(45,36)
console.log(arr)

// question
var arr=[1,23,45,98,75,23]
var e=arr.push(45,23,36);
console.log(e)  /// return the length 

// pop - delete the last element
var arr=[1,23,45,98,75,23]
arr.pop();
console.log(arr)

// //unshift - same as push but add the the element in starting 
var arr=[1,23,45,98,75,23]
arr.unshift(53)
console.log(arr)

 // shift -same as pop but delete the first element 

 // splice== arr.splice(index,count:delete,items...)
 var arr=[1,23,45,98,75,25]
 arr.splice(2,3,"a","b","c")
 console.log(arr)

// slice
var arr=[1,23,45,98,75,25]
var x=arr.slice(2,4);// it will return the new array from index 2 to 4 but not include 4
console.log(x);
