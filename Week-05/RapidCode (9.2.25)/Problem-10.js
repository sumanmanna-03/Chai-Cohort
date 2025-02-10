// Problem: Use a for loop to reverse the order of teas in the array

const teas = ["Green Tea","Black Tea","Oolong Tea","White Tea","Herbal Tea"];
const reversedArray = [];

for(let i=teas.length-1;i>=0;i--){
    reversedArray.push(teas[i]);
}

console.log(reversedArray);

// OUTPUT - [ 'Herbal Tea', 'White Tea', 'Oolong Tea', 'Black Tea', 'Green Tea' ]
