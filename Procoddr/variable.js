// const array1 = ['a','b','c'];
// const array2 = ['d','e','f'];
// const array3 = array1.concat(array2)
// console.log(array3) // concat method doesnot change the original array

// const letters = ["a","b","c"];
// const numbers = [1,2,3];
// const aplhaNumeric = letters.concat(numbers);
// // console.log(aplhaNumeric);

// const num1 = [1,2,3]
// const num2 = [4,5,6];
// const num3 = [7,8,9];

// const numbers1 = num1.concat(num2,num3);
// // console.log(numbers1);

// console.log(num1.concat([7,8,9]));

// const num1 = [[1]]

// const num2 = [2,[3]]

// const numbers = num1.concat(num2);
// console.log(numbers);

// const numbers = [10,15,17,6,80,45];

// function findNumber(num){
//     return num<5;
// }

// console.log(numbers.some(findNumber));

// function isBigEnough(element){
//     return element<=1000;
// }

// const checkEveryMethod = [12,5,8,130,44].every(isBigEnough);
// console.log(checkEveryMethod);

// const isSubset = (array1, array2) => 
//     array2.every((element)=>array1.includes(element))
// console.log(isSubset([1,2,3,4],[2,3,8]))


let a = [1,2,3]

// console.log(a.fill("a"))
// console.log(a.fill(4))
// console.log(a.fill(4,1,2))
// console.log(Array(4).fill({}));

// const arr = Array(3).fill({})
// arr[0].hi = "hi"

// console.log(arr);

// const arr = new Array(3);
// for(let i=0;i<arr.length;i++){
//     arr[i] = new Array(4).fill(1);
// }
// arr[0][0] = 10;
// arr[1][2] = 3
// console.log(arr[1][3]);

// const tempGirls = Array(5).fill("girl");

// console.log(tempGirls);

// const arr = ["a","b","c","d","e","f"];

// const arrValues = arr.map((elem,index) => {
//     return elem;
// })
// console.log(arrValues)

// const arr1 = [0,1,2,[3,4]];

// console.log(arr1.flat())
// const arr2 = [0,1,[2,[3,[4,5]]]];

// console.log(arr2.flat(Infinity));

// const arrh2 = [1,,3,undefined,["a",["d", ,"e"]],null];

// console.log(arrh2.flat(Infinity))

// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });

// const array1 = [1,2,3]

// console.log(array1.includes(2));

// //it return boolean value

// // const pets = ['cat','dog','bat'];

// // console.log(["1",2,NaN,,].includes(undefined));

// const beasts = ['ant','bison','camel','duck','bison'];

// console.log(beasts.indexOf('bison',-3))

// // const array = [2,9,9]

// // array.indexOf(2);
// // console.log(array.indexOf(2,-5))

// const indices = [];
// const array = ["a","b","a","c","a","d"];
// const element = "a";

// let idx = array.indexOf(element);
// while(idx!=-1){
//   indices.push(idx);
//   idx = array.indexOf(element, idx+1);
// }

// console.log(indices)

// function updatevegetablescollection(veggies, veggie){
//   if(veggies.indexOf(veggie) === -1){
//     veggies.push(veggie);
//     console.log(`New veggiies collection is : ${veggies}`);
//   }
//   else{
//     console.log(`${veggie} already exists in the veggies collection`);
//   }
// }

// const veggies = ["potato","tomato","chillies","green-pepper"];

// updatevegetablescollection(veggies, "spinch");
// updatevegetablescollection(veggies, "spinch");

// const elements = ['Fire','Air','Water']

// console.log(elements.join("_"))

// const arr = [5,1,3,2,6]

// function double(x){
//     return x*2;
// }

// function triple(x){
//     return x*3;
// }

// function binary(x){
//     return x.toString(2);
// }

// const out = arr.map(function binary(x){
//     return x.toString(2);
// })

// // const outPut = arr.map((x)=>{
//     return x.toString(2);
// })

// console.log(outPut);

// console.log(out);

// const output = arr.map(binary);
// console.log(output);


// function rec(n){
//     if (n==1){
//         return "MadeEsay";
//     }
//     else{
//         rec(n-1);
//         for(let i=0;i<n;i++){
//             console.log("MadeEasy");
//         }
//     }
// }

// console.log(rec(3));

const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 2);

console.log(removed);
