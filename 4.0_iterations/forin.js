//forin is also a special type of loop

const obj1 = {
    1 : "aditya",
    2 : "sanjhi",
    3 : "verma"
}
for (let val in obj1) {
    console.log(val)      //printing only the key
}
for(let val in obj1){
    console.log(obj1[val]);  //printing the value of the key
}

//this can work also in map and array
const arr = [1,4,566,87,9,5,4]; 
for (let val in arr) {
    console.log(val);  //printing the index of the array
}
for (let val in arr) {
    console.log(arr[val]);  //printing the values at val index
}


const map = new Map();
map.set(1,"sanjhi");
map.set(2,"aditya");
map.set(3,"verma");

// for (let  [val1,val2]  in map) {
//     console.log(val1);
// }

//so we cant apply forin loop in the maps