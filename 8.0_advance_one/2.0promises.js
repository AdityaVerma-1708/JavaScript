const promises1 = new Promise(function(resolve,reject){
    //yahan asynch function ka kaam hoga 
    setTimeout(function(){
        console.log("time out ka kaam aa gya ");
        //then we need to call resolve function since the task has resolved
        resolve(); // this will connect to .then()
    },1000)
})
//consuming the promises
promises1.then(function(){
    console.log("consumed");
})

//this whole thing can be written into different from

new Promise(function(resolve,reject){
    //yahan asynch kaam hoga 
    setTimeout(()=>{
        console.log("kaam ho gya");
        resolve()
    },1000)
}).then(function(){
    console.log("resolved")
})

//------------------------------------------------------------------
//now we have to pass the arguments sometime which can be done through resolve

const promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user : "aditya verma" , email : "adityav1708"});  //basically op can be in any datatype
    })
})

promise2.then(function(user){
    console.log(user);
    console.log(user.user);
    console.log(user.email);
})


//now we have studied about resolve but sometimes we encounter the error also 
//for that we need to use the chaining of the then and catch 


const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = true  //suppose we get some error
        let error = false;
        if(!error){
            resolve({name : "aditya",password : "asdf"});
        }
        else{
            reject("SOMETHING WENT WRONG");
        }
    })
})

promise3.then((user) =>{
    console.log(user);
    return user.name;  //will return to chained .then()
}).then((name)=>{
    console.log(name);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("the promise either resolved or rejected.")
})
//now if it is taking too much we can use the finally keyword intentially stop the then catch loop hell

//------------------------------------------------
//now we can also use the async await instead of using then and catch both are syntax only we can use anything
//basically main difference between them is async doesnot handle the error effectively 
//sometimes it is goood because we dont want to go further untill the connection made

//but if we want to handle we can use try catch inside the async await

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({database : "maria" ,pass : "1234"});
        }
        else{
            reject("ERROR - CONNECTION REJECTED")
        }
    })
})

// async function consumWithAsynch(){
//     const response = await promise4;     // here this full function will show error since from promise rejection came and we are not handling that hence we need to use the try and catch
//     console.log(response)
// }

//we have to call the function

async function consumWithAsynch(){
    try{
        const response = await promise4;
        console.log(response);
    }
    catch(error){
        console.log(error);   //since promise4 have rejected thats why it came into the catch and printed the error returned by the reject() by the promise4
    }
}
consumWithAsynch();