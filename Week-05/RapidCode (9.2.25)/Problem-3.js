// Problem: Remove "Oolong Tea" from the list of teas

const teas = ["Green Tea","Black Tea","Oolong Tea","White Tea","Herbal Tea"];

const index = teas.indexOf("Oolong Tea");
if(index>-1){
    teas.splice(index,1)  // splice(start, deleteCount) => Start from index and delete 1 element
}
console.log(teas)

// OUTPUT - [ 'Green Tea', 'Black Tea', 'White Tea', 'Herbal Tea' ]