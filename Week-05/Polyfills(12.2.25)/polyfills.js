/**
 * A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
 * 
 * Using polyfills we can make our own function same functionality as the existing one or a new one
 */

// If our browser do not support any method, then we create that method from our own then we call that polyfill

if(!Array.prototype.fill){
    // Fallback - Polyfill
    Array.prototype.fill = function(){

    }
}

// Here lets suppose our browser not support fill() method, then we create fill method from our own. this is call polyfill

// Question- Error:- .map function does not exist on arr variable

// Ans-
const arr = [1,2,3,4,5,6]
/**
 * 1st step - Real Sinature ko samjo -> No return, function input, value, index
 * Calls my function for every value
 */
/** 
const ret = arr.forEach(function(value,index){
    console.log(`value at ${index} is ${value}`);
})
    */

// console.log(ret) // forEach function oes not return anything

// Now we are a same to same for each function as myForEach which will work same to as foreach, 

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const originalArr = this  // Jis vi object ko uper user ko call karega wo this ke under available hoga
        // 'this' Current object ki taraf pont karta hai
        // is antext this ki value arra hoga
        // Jo vhi us function ko call karta hai
        for(let i=0;i<originalArr.length;i++){
            userFn(originalArr[i],i);
        }
    }
}

//  This is the function we made - which is polyfill

const newForEach = arr.myForEach(function(value,index){
    console.log(`My for each value at Index ${index} is ${value}`)
})

// -------------------------------------------------------


// We are making polyfill of .map() function
// Signature  .map
// Return - New Array, Each element Iterate, userFn
// Does not change original array

const n = arr.map((e)=> e*2);
// console.log(n)

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){ // This is taking input of user ka function
        const result = [] //Making a new array because .map function return a new array

        for(let  i=0;i<this.length;i++){
            const value = userFn(this[i],i) // we are using index here because original map ka under index use hota hai
            result.push(value)
        }

        return result;
    }
}

const n2 = arr.myMap((e) => e*3) //This is the myMap function what we have created which we have created from our own 
// console.log(n2);


//  ----------------------------------------

// Filter
// Sinature: Return - new Array | input: userFn
// agar user ka function true return karta hai toh current value ko new array mei include kar deta hai

const n3 = arr.filter((e)=> e % 2 ==0)
// console.log(n3);

// Polyfills for filter 

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const result = []

        for(let i=0;i<this.length;i++){
            if(userFn(this[i])){
                result.push(this[i])
            }
        }
        return result;
    }
}

const n4 = arr.myFilter((e)=> e % 3 ==0)
console.log(n4);

// H.W = Write all polyfills by yourself