// const name = 'Amir'
// const userAge = 21

// const user = {
//     name, 
//     age: userAge,
//     location: 'Kirov'
// }

// console.log(user)

// Object destructing

const product = {
    label: 'Red notebook',
    price: 3, 
    stock: 201,
    salePrice: undefined,
    rating: 4
}

// const {label: productLabel, stock, rating = 5} = product

// console.log(productLabel, stock, rating)

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}   

transaction('order')