let myArray = [1,2,3,4,5];
// let sum = 0;
// for(let i=0;i<myArray.length;i++){
//     sum += myArray[i];
// }

// console.log(sum);

function sumfac(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        sum = sum + numbers[i];
    }

    return sum;
}

let result = sumfac(myArray);

console.log(result);

let anotherArray = sumfac([3,3,2,6,2,4]);
console.log(`My result is ${anotherArray}`);