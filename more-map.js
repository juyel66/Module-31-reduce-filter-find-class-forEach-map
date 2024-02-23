const mapValue= [3,5,6,7,8,9];
const result = mapValue.map(n=>n*2);
// console.log(result);

const bonusFive= mapValue.map(n=>n+5) 
// console.log(bonusFive);


const friendsList=['Juyel', 'Rimon', 'kamrul', 'Sobuj', 'kabul'];
const  myFriend= friendsList.map(n=>n.length);
// console.log(myFriend);

// friends name first letter need 
const friendsFirstLetter= friendsList.map(friend=>friend[0]);
console.log(friendsFirstLetter);
// output: [ 'J', 'R', 'k', 'S', 'k' ]