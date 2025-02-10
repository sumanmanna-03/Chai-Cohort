// Prototype - Konse function available hai kaise wo function kam kar raha hai wo sab prototype ke ander aata hai
// Prototype is a object

const arr = [1,2,3]

// arr variable is a array type
/**
 * Javascript will create '.prototype' object inside arr
 * .protype ka under main ARRAY ka method ka ak copy bana degi
 * .prototype = {
 *      .map
 *      .forEach
 *      .filter
 *      .................
 * }
 * 
 * Jab bhi hum kuch bhi array bana te hai wo jo variable hoga uske prototype me wo sare function availble hoga 
 * That is the reason jab bhi hum arr dot(.) karte hai , then it check under '.protype' ke under konsa function present hai
 * 
 * --------------------------------------------------
 *  Array.prototype = {properties} -> where all array method are exist
 * 
 *  const arr = [1,2,3,4]
 *  
 *  javascript arr ka under  "arr.__proto__" karke ak property banata hai jisko wo equal kar deti hai "Array.protype" ka sath
 * 
 *   arr.__proto__ = Array.prototype 
 * 
 *  "__proto__" created javascript itself
 *  */ 


/**
 * You can create your own propery -> Array.prototype.<property name>
 * 
 * Array.prototype.suman = function(){
    console.log("This is hacked by Suman")
   }
 * 
 * You can access this proprty suman
 * 

 */


/**
 * To check copied Array method in a child array -> arr._proto__
 * to check the main Array method -> Array.prototype
 */

/**
 * In JavaScript, a prototype is an object that other objects inherit properties and methods from. Every object in JavaScript has a prototype, forming a prototype chain. 
 * 
How does it work?
When an object is created, it inherits properties and methods from its prototype. 

This chain continues until a prototype with null is reached. 
When a property is requested for an object that doesn't have it, JavaScript looks at the prototype to find it. 

This process continues until the property is found or there are no more prototypes to check.

Why is it useful? 

Prototypes allow for code reuse.
They make it easy to define methods for all instances.

Examples of prototypes in JavaScript

Array.prototype.flat(): Creates a new array with all sub-array elements concatenated into it 

String.prototype.localecompare(): Compares strings in a locale-aware manner 
 */

Object.prototype.chai = function(){ // We add custom chai property in Object prototype
    console.log("Chai")
}

const obj = {
    x:1,
    length:1
}

console.log(obj.chai()) 

/**
 * Prototype ka under actual function exist karta hai, jab bhi hum iska ak object banate hai wo functons '.__proto__' ka under exist ho jata hai ->> thats how we able to access the .map(),.pop(),.push() etc
 */