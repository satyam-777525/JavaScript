// var person={
//     fname:"satyam",
//     lname:"varshney",
//     Age:20,
//     city:"hathras"
// }
// console.log(person)
// console.log(person.Age);
// console.log(person["Age"])

var person={
    fname:"satyam",
    lname:"varshney",
    Age:20,
    city:{
        name:"hathras",
        location:"district",
        place:{
            place1:"hathras",
            place2:"Mathura"
        }
    },
    skills:["Html","Css","js"]
}
console.log(person.city.place.place2)
console.log(person.skills[0])