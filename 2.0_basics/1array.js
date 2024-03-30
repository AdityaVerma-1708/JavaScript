//array in js is similar to other languages
    //-->js array size is dynamic
    //-->js array can contain diff datatypes also

const arr = [3,4,5,6,7]
console.log(arr)
console.log(arr[2])

const arr2 = new Array(3,5,6,7,4)
console.log(arr2)

//methods

arr.push(33)
console.log(arr)
arr.pop()

arr.unshift(0)  //adds the element to the starting
console.log(arr)
arr.shift()    //deletes from starting
console.log(arr)

console.log(arr.includes(33))
console.log(arr.includes(7))
console.log(arr.indexOf(55))
console.log(arr.indexOf(4))

const newarr = arr.join()  //basically it adds the element into string by specified seperator 
const newarr2 = arr.join('$')
console.log(newarr)
console.log(newarr2)
console.log(typeof arr)
console.log(typeof newarr)

//slice -vs- splice

const arr3 = [1,2,3,4,5,6];
console.log("A ", arr3)

const slicee = arr3.slice(1,3);
console.log("A ",arr3)
console.log("sliced ",slicee);

const splicee = arr3.splice(1,3)
console.log("A ",arr3)
console.log("splices ",splicee);




