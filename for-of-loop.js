const numbers = [45, 64, 56, 46, 54, 44, 55, 66];

/*
// normal for loop
for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}
*/

// for of loop
for(const number of numbers) {
    // console.log(number);
}

const products = [
    {id: 1, name: 'Walton Phone', price: 15000},
    {id: 2, name: 'iPhone', price: 15000},
    {id: 3, name: 'Redmi phone', price: 15000},
    {id: 4, name: 'Lenovo Yoga Laptop', price: 15000},
    {id: 5, name: 'Dell Inspiron 5570 Laptop', price: 15000},
    {id: 6, name: 'Walton Phone', price: 15000},
    {id: 7, name: 'One Plus Phone', price: 15000},
    {id: 8, name: 'HP Laptop', price: 15000},
    {id: 9, name: 'Nokia 1100 Phone', price: 15000},
    {id: 9, name: 'MSI New Gaming Laptop', price: 15000},
];

function matchedProducts(products, search) {
    const matched = [];
    for(const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);
