//we can use or not use the semicolon anywhere we want
"use strict";
/* there are different types of datatypes in the js 
    - string  "" or ''
    - number  range if 2 power something
    - bollean true or false
    - null = it is a standalone value/ representation of nothing
    - undefined = not defined
    - symbol = used for uniqueness 

    we dont need to specify the datatypes while declaring the variable, js automatically checks 
    */
let a = "a"
let b = 'af'

console.log(typeof(a));
console.log(typeof b);
console.log(typeof("aditya"));
console.log(typeof null); //-->this will show object *****very  important
console.log(typeof undefined);

//----------------

let id = "33"
console.log(typeof(id))
let idd = Number(id) //conversion
console.log(typeof(idd))
console.log(idd)

let iddd = "33acs"
let id4 = Number(iddd);
console.log(typeof(id4))
console.log(id4)  // --> this will give the NaN (Not a Number) but the type is number

let id5 = null
console.log(typeof(id5))
let id6 = Number(id5) //conversion
console.log(typeof(id6))
console.log(id6)  // will give 0

let id7 = undefined
console.log(typeof(id7))
let id8 = Number(id7) //conversion
console.log(typeof(id8))
console.log(id8)  //-->will give NaN

/*string to number 
    true = 1; false = 0 
    undefined = NaN
    "adsf" = NaN
    "32" = number
    null = 0
*/

/* to boolean 
    1 = true; 0 = false
    "" = false
    "fsd" = true
*/