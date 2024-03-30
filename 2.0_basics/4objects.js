//now here we will talk about the how to make singleton (through constructor)


// const name = new Object();   //-->singleton object 
// const name2 = {};   //-->not a singleton object

// console.log(name);    //both will not show any difference
// console.log(name2);

//we can do the nesting of the object also
const name = {
    name : "aditya",
    sem : "5th",
    school : {
        name2 : "asanjhi ",
        college : {
            name3 : "asdads"
        }
    }
};  

console.log(name);
console.log(name.school);
console.log(name.school.name2)


//concatenationn of two objects
const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}
// const obj3 = {obj1,obj2};  -->wrong method it will put both object in the third object, we want element to be inserted
const obj3 = Object.assign(obj1,obj2);
const obj4 = Object.assign({},obj1,obj2);
//both dont have any difference in output but 
    //in first all elements in copied in the obj1
    ///in second new object in created 
    // console.log(obj1); //-> see here the obj1 is noww changed
console.log(obj3);
console.log(obj4);

//and best method to use this concatenation is spread (similar to array )
const obj5 = {...obj1,...obj2};
console.log(obj5)



//when database se value aati ahi toh vo array of object ke form mein aati hai
const user = [
    {
        id : "1",
        name : "sdfsd"
    },
    {
        id : "2",
        name : "sdfsd"
    },
    {
        id : "2",
        name : "sdfsd"
    }
]
console.log(user[1].id);
console.log(user[2].name);


//now if we want the all key of the objects
console.log(Object.keys(obj5));
console.log(Object.values(obj5));  //these will return the array of key or value 

console.log(Object.entries(obj5)); //this will return the array of array containing the key value pair

//and there more funciton which can explore 
