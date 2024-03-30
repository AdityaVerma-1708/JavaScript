//there are two main types of datatypes
//primitive : string, number, boolean, null, undefined, symbol, bigInt

    // js is a dynamically typed language, means we dont need to tell the datatype of the variable while declaring it 
    // js in its runtime only automatically checks store

let name = "aditya"
let number = 324
let boolean = true
let number2 = null;
let number3     //undefined
let id = Symbol('232')
let id2 = Symbol('24')

let bigint = 234234234234234234n //n is the representation of the bigint

//non-primitive or reference types : array,objects

    //reference types means this datatype can be passed through its original addrress

let array = ["aditya" , "verma" , 32];

let myobj = {
    name1 : "aditya",
    id3 : 342,
    school : "kv"
}

let myfunc = function(){
    console.log("hello world")
}
myfunc()

