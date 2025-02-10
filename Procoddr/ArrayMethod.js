// function addGuest(guestList, newGuest) {
//     // Add the newGuest to guestList and return the updated list
//     guestList.push(...newGuest);
//     return guestList;
// }

// let guestList = ["Suman","Manna"];
// let newGuest = ["howrah"];

// let newGuestList = addGuest(guestList,newGuest);
// console.log(newGuestList);

// function eatCandy(candyJar) {
//     // Remove the last candy from the jar and return the updated jar
//     candyJar.pop();
//     return candyJar;
// }
// let candyJar = ["candy","kgk","hlhlj"];

// console.log(eatCandy(candyJar));

const animals = ["Dog","Cat","Lion","pig","Cat"];

// console.log(animals.includes("Dog"));

// console.log(animals.indexOf("Cat"));

const array1 = [1,2,3]; 

// console.log(array1.includes(2));

// console.log(animals.lastIndexOf("Lion",-2));

// const atToStr = animals.toString();
// console.log(animals);
// console.log(animals.toString())

// const jind = animals.join(",");
// console.log(jind)

// const fillArr = animals.fill("a",1,-2);

// console.log(fillArr);

const arr = [1,2,3,4,[5,6,[7,6,8]]]

// console.log(arr)

// const flatArr = arr.flat(2);

// console.log(flatArr);

// console.log(arr);

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// // const arrCon

// const sliceTheArr = arr1.slice(-3,-1)
// console.log(sliceTheArr);

// const arr1 = ["@","%","+","#","+","&"]

// const splicetheArr = arr1.splice(-4,2)
// console.log(splicetheArr,arr1);

// const ff = [2,9,4,3,7,5]
// console.log(ff.sort());

const foodList = ["Burger","healthy","Burger"]

for(let i=0;i<foodList.length;i++){
    if(foodList.includes("Burger")){
        foodList.pop(foodList[i]);
    }
}
console.log(foodList);