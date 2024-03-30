//if you want to learn the js, just do objects and events thats it 
//there are two ways to declare the objects in two different ways
//-> object literals and through constructor (constructor will create the singleton and literals will not create singleton)

//object literals
const mysymbol = Symbol("key1")

const user = {
    name : "aditya",  //by defualt it will consiser key as a string
    usn: "1BY21IS013",
    age: 20,
    day: ["monday","tuesday"],
    [mysymbol] : "mykey1"
}

// there are differnt ways to access the data of the objects
console.log(user.name)
console.log(user.age)
console.log(user.usn)
console.log(user.day)
console.table([user.name,user.age,user.usn,user.day])


console.table([user["age"],user["age"],user["usn"],user[mysymbol]])
//here is this method we have to specify the string since js by default analyse key

user.age = "34";  // changing the value 
console.table([user.name,user.age,user.usn,user.day])

// if we want that nobody changes the value of object then we can freeze them

// Object.freeze(user)
user.name = "aditya verma"
console.table([user["age"],user["age"],user["usn"],user[mysymbol]])

//function also we can keep in the object
user.func = function(){
    console.log("hello object")
}
console.log(user.func()) //this is returning the hello object
console.log(user.func)//this is reffering to the func -->js is telling this func is function which is anonymous(basically function didnt execute)

//now if we want to refrence the some key of the object
user.func2 = function(){  
    console.log(`hello ${this.name}`)   //"this" keyword specifing that take the keys this (current object keys)
}           //this used to refer itself 
console.log(user.func2())   //-->showing hello aditya verma


//at the end both . and [] ways to accessing of keys is important sometimes only [] will work and sometimes only . will work














