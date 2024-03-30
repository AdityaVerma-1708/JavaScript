//number 
let a = 434
let b = new Number(42)  //number created as object 
console.log(a)
console.log(b) //-->it is specifiying it is a number and its 42

//there are different methods and different function of the number 
console.log(typeof(a.toString()))
console.log(a.toString().length)

console.log(a.toFixed(3))  //basically it is fixing decimal to given digits
let c = 343.3434342342
console.log(c.toFixed(3))

console.log(c.toPrecision(4))
console.log(c.toPrecision(2))   //it makes the value precise till given value 

let d = 1000000
console.log(d.toLocaleString())
console.log(d.toLocaleString('en-IN'))

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.EPSILON) 
//simimlarly there are so many different function

//maths--------------------
//js has maths library

console.log(Math.PI)
console.log(Math.sin(34))
console.log(Math.abs(-3))
console.log(Math.round(4.23))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.1))
console.log(Math.max(3,4,5,3,34))
console.log(Math.min(2,4,3,5,6))

console.log(Math.random()) //-->generates the random number 
console.log(Math.random()*10) 
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

let min = 10
let max = 20
console.log(Math.floor((Math.random())*(max-min)) + min) //-->generates random number between 10 to 20 



