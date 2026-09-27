// this keyword -its points to the object its belong to 
function age(){
    console.log(this.Age)
}
var person={
    fname:"satyam",
    lname:"varshney",
    Age:20,
    saymyname:function(){
        console.log(this.fname)
    },
    saymyage:age
}
var person1={
    fname:"Shivam",
    lname:"varshney",
    Age:22,
    saymyname:function(){
        console.log(this.fname)
    },
    saymyage:age
}
person.saymyname()
person1.saymyname()
person.saymyage()
person1.saymyage()


