//forof loop is speacial type of loop

const arr = [1,2,3,4,5,5,7,8];
for (let val of arr) {
    console.log(val)   
}

const a = "aditya";
for(let val of a){
    console.log(val);
}

//we can use this in map also
const map = new Map();
map.set(1,"aditya");
map.set(2,"sanjhi");
map.set(3,"verma");

for(let val of map){
    console.log(val)  //will print key value pair as array
}

for(let [k,v] of map){   // wil treat key and value seperately
    console.log(k + " --> " + v);
}

//lets see if this can work on obj
const obj1 = {
    1 : "aditya",
    2 : "sanjhi",
    3 : "verma"
} 
// for(let val of obj1){
//     console.log(val);
// }

// for(let [k,v] of obj1){
//     console.log(k + " --> " + v);
// }

//hence this cant work on object for that we have "FORIN" loop

