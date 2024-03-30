//basic camparisons >,<,>=,<= is simple 

console.log("2" > 0)  //--> true
console.log("02" > 0) //--> true

// bsically js before camparing first converts everything into common datatype

console.log(null > 0)  //-->false
console.log(null >= 0) //-->true
console.log(null == 0) //-->false
// equality checker and camparison operations works differently, camparison convert null into 0 

console.log(undefined > 0)
console.log(undefined >= 0)
console.log(undefined == 0)
//undefined cannot be converted into some other number, hence all false

//=== --> strictly equal, basically ==  converts the datatype and checks after that
// but === checks the datatypes also


console.log(0 === 0) 
console.log("3" === 0) 
console.log(null === 0)
console.log(undefined === 0)
