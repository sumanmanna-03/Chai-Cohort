// Problem - Use a for loop to count how many teas are caffeinated(excluding "Herbal Tea")

const teas = ["Green Tea","Black Tea","Oolong Tea","White Tea","Herbal Tea"];

let caffinatedMyTeas = 0;
for(let i=0;i<teas.length;i++){
    if(teas[i]!="Herbal Tea"){
        caffinatedMyTeas++;
    }
}

console.log(caffinatedMyTeas);

