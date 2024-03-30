//now here we will see the reduce method 
//for this we need a initial value 

const arr1 = [1,2,3,4]
const initialvalue = 0;
const sum = arr1.reduce((accumulator,currval) => {
    return accumulator + currval
},initialvalue);
console.log(sum)//returns the sum of the array 
// accumulator is the sum till previous element and currval is the current element and initialvalue is the accumulator for the first iteration

const sum2 = arr1.reduce( (acc,val) => acc + val,10);
console.log(sum2) //we have given the initalvalue as 10 it will return 20


//generally reduced functionally uses in shopping cart , like we have to add all items in the cart

const shoppingcart = [
    {
        name : "pen",
        price : 20
    },
    {
        name : "book",
        price : 200
    },
    {
        name : "bag",
        price : 500
    },
    {
        name : "box",
        price : 100
    }
]

const TotalPrice = shoppingcart.reduce( (acc,val) => acc + val.price,0)
console.log(TotalPrice)