// there are two types of memory STACK and HEAP
// stack is used by primitive datatypes --> works with copy 
// heap is used by non primitive datatypes --> works with reference

let a = 34
let b = a
b++
console.table([a,b])  //value of a has not changed --> b had the copy of a

let ob1 = {
    name: "Aditya",
    roll: 12
}
let ob2 = ob1;
ob2.roll = 13;

console.table([ob1,ob2])  // value of ob1 and ob2 has changed --> ob2 had the reference of ob1
