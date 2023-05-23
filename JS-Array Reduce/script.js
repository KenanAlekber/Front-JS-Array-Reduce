// True Task


let voters = [
    { name: 'Kənan', age: 20, voted: true },
    { name: 'Mirrahid', age: 20, voted: true },
    { name: 'Muxtar', age: 19, voted: false },
    { name: 'Elşad', age: 22, voted: false },
    { name: 'Mirməmməd', age: 19, voted: true },
    { name: 'Yaqub', age: 19, voted: true },
    { name: 'Hüseyn', age: 19, voted: true },
    { name: 'Sənan', age: 26, voted: false },
    { name: 'Əli', age: 19, voted: false },
    { name: 'Orxan', age: 19, voted: true },
    { name: 'Nihad', age: 20, voted: true },
    { name: 'Rəşad', age: 19, voted: false }
];

var newArr = [];

voters.reduce((acc, curr) => {
    if (curr.voted === true) {
        acc++
    }
    else {
        return false
    }
    newArr.push(acc)
}, 0);

console.log(newArr.length);


console.log("=======================");


// SUM TASK


let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let sum = wishlist.reduce((acc, curr) => acc + curr.price, 0)
console.log(sum);


function SumPrice(products) {
    let sum = 0;
    wishlist.map((product) => {
        sum += product.price
    });
    return sum;
}

console.log(SumPrice(wishlist));