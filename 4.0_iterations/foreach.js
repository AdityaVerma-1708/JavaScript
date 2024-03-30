//foreach is most useful loop
//-->it is high order array loop
//

const arr = [1,23,4,6,7,89];
// arr.forEach( function name() {})
//since it is a call back funciton toh uska naam nahi likhte
arr.forEach( function (val) {
    console.log(val);
})

//now we can use arrow function also
// arr.forEach( name() => {}) -->same call back hai toh fucntion ka naam nahi likhte hain
const arr2 = ["aditya","verma","sanjhi"]
arr2.forEach( (val) => {
    console.log(val);
}) 

//there are more different items we can paas in the function
arr2.forEach((val,index,arr2) => {
    console.log(val,index,arr2);
})

//the most important use case of this is array containing string or objects

const arr3 = [
    {
        key : "aditya1",
        value : "verma1"
    },
    {
        key : "aditya2",
        value : "verma2"
    },
    {
        key : "aditya3",
        value : "verma3"
    }
]

arr3.forEach( (val) => {
    console.log(val.key);
    console.log(val.value);
})

//foreach function doesnot return anthing even throgh it is a fucntion of array  