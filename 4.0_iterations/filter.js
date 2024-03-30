const arr1 = [1,23,54,76,8,4,7,9,5];
//similar to foreach filter is also takes the callback function but this return the updates the value

arr1.filter( (num) => {
    return num > 5 ;//-->this is condition basically those number which fullfill this condition will return by filter
})

const arr3 = arr1.filter( (num) => {
    return num > 5;    //here we are using explicit return (since we have started the scope with {} so we have to give the return statement)
})
console.log(arr3);

const arr2 = arr1.filter( (num) => num > 5)   //implicit return
console.log(arr2);


//these can also be done by foreach 
const arr4 = [];
arr1.forEach( (num) => {
    if(num > 5){
        arr4.push(num);
    }
})
console.log(arr4);

//lets do some practice on filter()

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
//this is array of object

const books1 = books.filter( (bk) => bk.genre == 'Fiction' );
console.log(books1)

const books2 = books.filter( (bk) => bk.publish >= 1998);
console.log(books2)

const books3 = books.filter( (bk) => bk.publish >= 1998 && bk.genre === 'Science');
console.log(books3)

