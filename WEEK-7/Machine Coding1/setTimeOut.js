/*
let person1 = {
    personName : "ravi",
    greet: function(){
        console.log(`Hello, ${this.personName}`);
    }
}

console.log('Hello from JS')
// setTimeout(() => console.log('I am delayed'), 0);
setTimeout(() => console.log('A 2SS'),10 *1000) // This mean wait minimum 10 second

console.log('Bye Bye')
*/

let person1 = {
    personName : "ravi",
    greet: function(){
        console.log(`Hello, ${this.personName}`);
    }
}

console.log('Hi');

setTimeout(person1.greet.bind(person1), 5*1000);

/**
 * We are using bind() function because when we use setTimeOut(), it goes to callbackQueue and then goes to call stack.
 * so when the function -> function(){
        console.log(`Hello, ${this.personName}`);
    } goes to callstack it cannot define this,performance ,so it return undefined
    Thats why we bind the function with that function, so that it can identify from which object it is calling
 *  iska execuution context delete ho gaya
 * 
 */

console.log('BYE');
