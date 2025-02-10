// Problem: Use a for loop to find the tea name with the most characters

const teas = ["Green Tea","Black Tea","Oolong Tea","White Tea","Herbal Tea"];
let longestTea="";

for(let i=0;i<teas.length;i++){
    let longChar = teas[0].length;
    if(teas[i].length>longChar){
        longChar = teas[i];
    }
    longestTea = longChar
}
console.log(longestTea)

//  OUTPUT - Herbal Tea