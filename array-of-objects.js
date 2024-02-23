const product = [
    {id:1, name: 'Lanevo', price:60000},
    {id:2, name: 'HP', price:50000},
    {id:2, name: 'macBook', price:150000},
    {id:2, name: 'walton', price:150000},
    {id:2, name: 'Tosiba', price:30000}
]
const name  = product.map(n=>n.name);
console.log(name);
// output: [ 'Lanevo', 'HP', 'macBook', 'walton', 'Tosiba' ]
const price  = product.map(n=>n.price);
console.log(price);
// output : [ 60000, 50000, 150000, 150000, 30000 ]

// forEach
product.forEach(p=> console.log(p.id));
// output: 1
// 2
// 2
// 2
// 2
    // filter 
    const expensive= product.filter(p=>p.price>50000);
    console.log(expensive);
//    output: [
//     { id: 1, name: 'Lanevo', price: 60000 },
//     { id: 2, name: 'macBook', price: 150000 },
//     { id: 2, name: 'walton', price: 150000 }
//   ]

const findProduct = product.find(p=>p.price>50000);
console.log(findProduct);
// output: { id: 1, name: 'Lanevo', price: 60000 }

// reduce 
const totalPrice = product.reduce((previous,current)=>previous+current.price, 0);
console.log(totalPrice);
// output: 440000