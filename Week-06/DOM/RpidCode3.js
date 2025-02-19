// 19.2.25

//-------------------------- 1 ----------------

Function.prototype.describe = function(){
    console.log(`Funcion name is ${this.name}`); 
}
// here this.name will be function name
// Function ka name aayaga

function greet(name){  // This is call parameter , name
    return `Hello ${name}`
}

greet.describe();
greet("Suman")

// ------------------------- 2 ------------------

greet.describe('hitesh'); // This is call argument , hitesh

// -------- ------ 3 ----------------- -----

// Function Decleration
function add(a,b){
    return a+b
}

// Function Expression
const subtract = function(a,b){
    return a-b
}

// Arrow Function
const multiply = (a,b) => a*b

// ---------------------------------- 4 --------------
// Tell Behaviour
function applyOperation(a,b, operation){
    return operation(a,b)
}

// This is call first class function

const result = applyOperation(5,4,(x,y) => x/y)


// --------------------------- 5 -------------

function createCounter(){
    let count = 0;
    return function(){   // This is call tiffin concept
        count++;
        return count
    }
}

function onef(){
    let myName = "hitesh"
}

// --------------------------- 6 ----------------------

(function(){ 
    console.log('Hitesh'); 
})() // This function structure is used for immediate calling

// Immediately invoked function expression

() ()




