const number = [2,3,4,5,6,7,8]
function doubleNumber(num){
    console.log('number is:',num)
    return num*2;
}

const result = number.map(doubleNumber);
// console.log(result);



const double2 = n=> n*2;
const output = number.map(double2);
console.log(output);

// step 3

const double3 = number.map(n=>n*2);
console.log(double3)


