// Map()- return the new array by performing some operation on each element of array
var arr=[3,4,5,6,7,8,9]
var arr1=arr.map(function(items,index){
    return items*items
})
console.log(arr1)

var arr1=arr.map((x)=>{
    return x*2
})
console.log(arr1)

// filter()- return the new array by filtering out the element which match the condition

var arr=[3,4,5,6,7,8,9]
var arr1=arr.filter((items,index)=>{
    return items%2==0;
})
console.log(arr1)

// reduce()- it will return the single value by performing some operation on each element of array
var arr=[3,4,5,6,7,8,9]
var sum=arr.reduce((total,items,index)=>{
    return total+=items;
})
console.log(sum)
// sort()
// for single digit
var arr=[8,5,2,3,4,5,6,8]
arr.sort()
console.log(arr)

// for double or more digit
var arr=[102.5,20,20.6,-30.15,-580.15]
arr.sort((a,b)=>{
    return a-b;
})
console.log(arr)
// find()- return first element which match the condition
var arr=[9,6,5,4,3,8,2,1]
var a=arr.find((items,index)=>{
    return items%2==0
})
console.log(a)


// findIndex()- return index of element
var arr=[9,6,5,4,3,8,2,1]
var a=arr.findIndex((items,index)=>{
    return items%2==0
})
console.log(a)
// every()-all the elements match the condition return true otherwise false
var arr=[9,6,5,4,3,8,2,1]
var c=arr.every((items,index)=>{
    return items%2==0
})
console.log(c)
//some()-atleast one element match the condition retyurn true otherwise false
var arr=[9,6,5,4,3,8,2,1]
var c=arr.some((items,index)=>{
    return items%2==0
})
console.log(c)

// reverse()
var arr=[78,23,56,2,32,56]
arr.reverse();
console.log(arr)
// join()
var df=["a","b","c","d"]
var str=df.join()
console.log(str)
var arr=str.split(",")
console.log(arr)
// concat()
var arr1=[1,2,3]
var arr2=[5,6,7]
var arr3=[9,10,11]
var arr=arr1.concat(arr2,arr3)
console.log(arr)
// flat()
var arr1=[[1,2,3],[4,5,6],[7,8,9]]
console.log(arr1.flat(1))

var a=[12,23,[12,25,36,[25,[225,[52,23,[2]]]]]]
console.log(a.flat(Infinity))