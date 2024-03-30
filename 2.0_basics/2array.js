//js array doesnot have any datatype baically it can have any datatype
//so if we are merging two array itself, includs array instead of its elements

const arr1 = [2,4,5,7]
const arr2 = [4,6,8,6,4]

// arr1.push(arr2)
// console.log(arr1) // it will have arr2 as a object

//so instead of this we uses the concatenate   
const arr3 = arr1.concat(arr2)  //always returns a new array
console.log(arr3)

//spread is better option for this 
//its like breaking array into its individual element 
const arr4 = [...arr1,...arr2]
console.log(arr4)

//it we have a array which has array inside it and we have to make it one single array then we can use flat 
const arr5 = [2,4,6,8,[3,5,8,0],3,5,7,[4,5,7,[6,7,90,3,]],5,6]
const arr6 = arr5.flat(Infinity); //here ininity is the depth of flating  
console.log(arr6);  
const arr7 = arr5.flat(1)
console.log(arr7)

//if we want to make an array from a given data 

console.log(Array.isArray("aditya"))  // will check a return bool
const a = Array.from("aditya")
console.log(a)
console.log(Array.from({name : "aditya"})) // from function is not works upon the obects it will return empty array
//and if we want it we need to specify it 



let b = 23
let c = 233
let d = 232
console.log(Array.of(b,c,d))
console.log(Array.of(a,b,c,d))








