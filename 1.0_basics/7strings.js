//strings 

let a = "Aditya";
console.log(a+" verma");
let b = new String("sanjhi");
//basically here we are creating the object of the class string by using new keyword and constructor 

console.log(`my name is ${a} and my lvove is ${b}`)  //this is preferred way to use the string concatenation

//there are different function or methods we can use in strings
console.log(b[0])
console.log(a.toUpperCase())
console.log(a.length)
console.log(a.__proto__)
console.log(a.charAt(4))
console.log(a.indexOf('t'))

//substing and slice
let c = a.substring(0,3)  //if we put negative it will consider from 0
console.log(c)

let d = a.slice(-7,2)  // here if we put negative it will consider from back
console.log(d)

//trim -->trimeend and trimstart is also there
let e = "     sdfsdfssf "
let f = e.trim();
console.table([a,b,c,d,e,f])

//replace and includes
console.log(f.replace('sd','hello'))
console.log(f.includes('aditya'))
console.log(f.includes('sd'))

let g = e.replace('fs',"adadada")   
console.log(g)

//split on the basis of some give value
let ad = "aditya-verma"
let add = ad.split('-')
console.log(add)
