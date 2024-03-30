function hello(){
    console.log("hello world");
}
hello(); // -->execution
hello; // -->refrfrence

function add(a,b){
    console.log(a+b);
}
add(3,4);

//if we want to  store the result in some variable then we should return result from the function 
//console.log is not returning anything

function addd(a,b){
    let result = a+b;
    return result;
}

const result = addd(3,7);
console.log(result);

//and other basic things are similar to other languages

//now when ever we dont know the number of parameter the user will pass in the function we use REST operator
//basically rest operator makes the array of the argument and return

//as an example can be a cart or e-commerce website where we dont know how much items the user will add into the cart

function cart(...items){
    return items;
}
console.log(cart(100,234,45,8,6,3,4)) 
//spread operator and rest operator looks same but has different use according to the situation


//access object 
const obj1 = {
    name : "aditya",
    age : "23"
}
function obj(anyobject){
    console.log(`name is ${anyobject.name} and age is ${anyobject.age}`);
}
obj(obj1);

//access array

const array = [2,4,5,7,8]
function arr(anyarray){
    console.log(anyarray[0]);
}
arr(array);