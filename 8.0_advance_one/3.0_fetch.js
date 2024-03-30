fetch('https://api.github.com/users/AdityaVerma-1708')   
.then((response)=>{
    return response.json();
})
.then((data) =>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})