//scopes of the variable
let a = 12;       //global declaration
const b = 20;
var c = 34;

if(true){
    let a = 24;        //local scope
    const b = 90;
    var c = 23;
}

console.table([a,b,c]);  // see the var updated duw to local scope 

//to solve this they have introduced the let keyword

// nested function 
function one(){
    const name = "aditya";
    function two(){
        console.log(name);
        const name2 = "sanjhi";
    }
    // console.log(name2);  //will show error since name2 is not defined in the scope
    two();
}
one();



//--------------------------------------------------------------------------------------

//now are two different ways to ddefine the function

onee();   //will not show error even its defined after the declaration
function onee(){
    console.log("asfd");
}

twoo();  //willl show error
const twoo = function(){
    console.log("asdasdasd");
}
