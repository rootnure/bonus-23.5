const nayok = {
    name: 'Khan',
    id: 333,
    address: {
        line1: '121/A, Basundhara Lane',
        line2: 'Basundhara DOHS, Dhaka',
        line3: 'Bangladesh'
    },
    isSingle: true,
    friends: ['abul', 'babul', 'cabul'],
    movies: [
        {
            name: 'no 1',
            year: 2015
        },
        {
            name: 'king khan',
            year: 2019
        },
        {
            name: 'king khan',
            year: 2019
        },
        {
            name: 'king khan',
            year: 2019
        }
    ],
    car: {
        brand: 'tesla',
        price: 50000000,
        year: 2050,
        company: {
            name: 'tesla',
            CEO: 'Elon Mask',
            location: 'USA'
        }
    },
    act: function (name) {
        console.log('this is function inside an object property', name);
    }
}

console.log(nayok.address);
console.log(nayok.movies); // object 

console.log(nayok.act);
nayok.act('khan');