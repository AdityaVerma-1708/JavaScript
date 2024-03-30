const obj1 = {
    name : "aditya",
    age : "3343",

    message : function (){
        console.log(`hello ${this.name} and your age is ${this.age}`)
    }
}
//basically this keyword is used to refer the current context 
obj1.message();
//if we changes the name of thje object then it will use the updated name only
obj1.name = "sanjhi";
obj1.message();


console.log(this);
//this gives the empty parentheses,since in the node environment the this refer to empty context since nothing is there in the global, but if we do this in browser it will print the window since in browser the global context is window ... very imp question as per the interview
//initially js used to found in the browser only but now we have differnt enviroment, in browser the flobal declaration is of window

//and is we do console.log of this in some scope then it will print their context 
const obj2 = {
    name : "aditya verma",
    age : "34",
    mgs : function(){
        console.log(this);
    }
}
obj2.mgs();  // will print all the object 


//now this keyword does not work under the function scope
function abc(){
    console.log(this);  //this will print many differnt values
}
abc();
function abcd(){
    const name = "aditya";
    console.log(this.name);   //will show undefined -->this keyword does not work for function
}
abcd();

//--------------------------------arrow function
const add = function(a,b){   //explicit return
    return a+b;
}
const add2 = (a,b) => {    //explicit return  /basically we have to provide the return keyword
    return a+b;
}
const add3 = (a,b) => (a+b);   //implicit return    //returning by itself
const add4 = (a,b) => a+b;     //implicit return

    // all these above defined function decalaration is same 
    //but depending upon uses we uses the different decalration
    //like for example, if we want to return object, then we have to use the explicit return method 
console.log(add(3,4));
console.log(add2(3,4));
console.log(add3(3,4));
console.log(add4(3,4));
