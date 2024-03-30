//IIFE --> Immediately Invoked Function Expressions
//sometimes we need function to be execute as soon as it declares, then we use IIFE read documentation for more uses
//()()  -->first is for declaration and second is for execution

(function one(){    //this type is called names iife since we have given some name to function 
    console.log("hello");
})();  //here semicolon is compulsory

(() => {                           //unnamed iife
    console.log("hello world"); 
})();

//if we want to pass any parameter

( (name) => {
    console.log(`hello ${name}`);
})('aditya');