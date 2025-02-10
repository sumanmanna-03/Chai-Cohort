// Problem - Filter the list to only include teas that are caffeinated("Herbal Tea" is not caffinated)

const teas = ["Green Tea","Black Tea","Oolong Tea","White Tea","Herbal Tea"];
const caffinatedTeas = teas.filter((tea) => tea!= "Herbal Tea"); //filter(callbackFn, thisArg)
console.log(caffinatedTeas)


// OUTPUT - [ 'Green Tea', 'Black Tea', 'Oolong Tea', 'White Tea' ]