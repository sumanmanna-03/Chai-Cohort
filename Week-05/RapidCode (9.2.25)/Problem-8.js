// Problem - Use a for loop to create a new array with all tea name in uppercase

const teas = ["Green Tea","Black Tea","Oolong Tea","White Tea","Herbal Tea"];
const uppercaseTeas = [];

for(let i=0;i<teas.length;i++){
    uppercaseTeas.push(teas[i].toUpperCase());
}

console.log(uppercaseTeas)

// OUTPUT - [ 'GREEN TEA', 'BLACK TEA', 'OOLONG TEA', 'WHITE TEA', 'HERBAL TEA' ]
