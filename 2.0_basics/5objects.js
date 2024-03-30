//here we will see the destructuring of the objects 

const obj1 = {
    companyname : "aditya",
    age : "213",
}
const {companyname : n} = obj1;
console.log(obj1.companyname);
console.log(n);
// basically here the main difference came with destructuring is we dont have to write the onj1.companyname again and agai, if we want ot aceess it so many time in the program then we can use destructring 

//JSON --> JavaScript Object Notation 
//jitni bhi APIs (Application Programming Interface) hoti hain vo sab apna data genrally objects ki form mein deti hai
/*
    {
        "name" : "aditya",
        "age" : 2134
    }

    this data may contain the array also
    {
        [..]
    }

    or APIs may give the data in the form of array also

    so basically we need to extrate the data from APIs that can be done by different commands like fetch and others
    

*/
