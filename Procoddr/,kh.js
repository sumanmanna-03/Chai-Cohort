let color = "Red";
function RedY(color){
    switch(color){
        case "Red":
            return "Stop";
        case "Blue":
            return "Slow Down";
        default:
            return "Stop";
    }
}

function convertTemparature(value,scale){
    switch(scale){
        case "F": // Celcius to farenheit
            return (value*1.8)+32;
        case "C":
            return ((value-32)*5) /9;
        default:
            
    }
}

function distributeGifts(totalGifts,friends){
    for(let i=0;i<totalGifts;i++){
        friends[i] = totalGifts[i];
    }
    if(friends<=totalGifts){
        return friends;
    }
    else{
        return totalGifts;
    }
}

// console.log(distributeGifts(10,50))

function countApples(apples){
    let count=0;
    for(let i=0;i<apples.length;i++){
        count++;
    }
    return count;
}

function countBoxes(totalBars,barsPerBox){
    let output=0;
    for(let i=0;i<totalBars;i++){
        for(let j=0;j<barsPerBox;j++){
           output = totalBars/barsPerBox;
        }
    }
    
    return parseInt(output);
}

// console.log(countBoxes(17,5));

// console.log(typeof(3.4))

function workingDays(days) {
    // your code here
    let workingDays = 0;
    for(let i=0;i<days.length;i++){
      if(days[i] != "Saturday" && days[i] != "Sunday"){
        workingDays++;
      }
    }
    return workingDays;
}

let days = ["Monday","Tuesday","Sunday","Saturday"];

// console.log(workingDays(days));

function totalStars(starLevels) {
    let totalCount=0;
    for(let i=0;i<starLevels.length;i++){
        for(let j=0;j<starLevels[i].length;j++){
            totalCount++;
        }
    }
    return totalCount;
}

// let totalCount = [["*","*","*"],["*","*"],["*"]];

// console.log(totalStars(totalCount));

// console.log(totalCount[1][0]);

function totalPrice(prices) {
    let totalCost = 0;
    for(let i=0;i<prices.length;i++){
      totalCost = totalCost + prices[i];
    }
    return totalCost;
  }

let a = [1,2,3,4];
console.log(totalPrice(a));

// for(let i=4;i>0;i--){
//     for(let j=0;j<i;j++){
//         console.log("*");
//     }
//     console.log("\n");
// }

function invertedMountain(n) {
    for(let i=0;i<n;i++){
      let row="";
      for(let j=0;j<n-i;j++){
        row += "*";
      }
      console.log(row);
    }
  }
  
console.log(invertedMountain(4));

