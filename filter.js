// const number =[1,3,4,5,6,7,9]


const player = [67,54,34,77,89,87,54]

const filterNumber = player.filter(n=>n>60);
console.log(filterNumber);
// output: [ 67, 77, 89, 87 ]
const filterNum = player.filter(n=>n%2==1);
//  output: [ 67, 77, 89, 87 ]
