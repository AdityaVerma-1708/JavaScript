//there are more function similar to filter
const arr1 = [1,5,6,45,6,8,2,5,345,3]
const arr2 = arr1.map( (num) => {
    return num + 10;
})
console.log(arr2);
//map also a call function 
//filter basically filter krk return karega values ko and map har value of iterate krta hai

//chaining  -->using two or more methods at the same time
const arr3 = arr1.map( (num) => num * 10).map((num) => num + 1);
console.log(arr3);

const arr4 = arr1.map((num) => num*10)
                 .map((num) => num + 1)
                 .filter((n) => n <= 20)  //for better understanding we can give indentation like this
console.log(arr4);
