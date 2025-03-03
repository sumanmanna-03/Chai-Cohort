// function checktruthyValue(value){
//     if(value){
//         console.log("Truthy");
//     }
//     else{
//         console.log("Falsy");
//     }
// }

// checktruthyValue(undefined)\

// function login(username, password){
//     if(username === 'admin' && password === "1234"){
//         console.log("Login successful");
        
//     }
//     else{
//         console.log("Invalid credential");
        
//     }
// }

let salesData = [
    {product: "Laptop", price:1200},
    {product: "SmartPhone", price:900},
    {product: "HeadPhone", price:800},
    {product: "Keyboard", price:300},
]

// We have to find total sales -> we will use reduce method here

let totalSales = salesData.reduce((acc, sale) => 0+sale.price,0)
// This syntax will work
/*console.log(totalSales); // This will return the last value

let totalSales1 = salesData.reduce((acc, sale) => acc+sale.price,0)
console.log(totalSales1);*/

// mdn-> reduce piping

// Low stock item

let inventory = [
    {name:"Widget A", stock: 30},
    {name:"Widget B", stock: 120},
    {name:"Widget C", stock: 45},
    {name:"Widget D", stock: 70},
]


// let lowStockItem = salesData.filter((item)=>item.stock <50);
let lowStockItem = inventory.filter((item)=>{
    return item.stock<50
});
// console.log(lowStockItem);

let userActivity = [
    {user:"Alice",activityCount:45},
    {user:"Suman",activityCount:72},
    {user:"Charlie",activityCount:33},
]

// find most active user
let mostActiveUser = userActivity.reduce((maxUser,user) => 
    user.activityCount > maxUser.activityCount ? user: maxUser
)

console.log(mostActiveUser);


