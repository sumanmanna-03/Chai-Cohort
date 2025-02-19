/**
 * What is Object?
 * -> Object is an entity which has functionality and properties
 * In OOP functionality call Methods
 * 
 * Properties - >ex:color, weight
 * Methods -> ex:Actions, Functions
 */

/**
 * Difference between Method and Function
 * ->There have no such difference between Method and Function.
 * But if a function is stand alone then it is call function.
 * If a function is part of an object then we call it Methods. Method basically object ki context me kaha jata hai.    Method(Object)
 */

const obj1 = {
    fname: "Suman",
    lname: "Manna",
    getFullName: function(){
        return `${this.fname} ${this.lname}`
    }
};

const obj2={
    fname: "Anirudh",
    lname: "Jwala",
}

obj2.__proto__ = obj1; // Here we are storing address of obj1 in obj2.__proto__
// if any object do not find any property then it check it's __proto__ 
// jab tak __proto__ null na ho jaya tab tak proto chalta rhaga 

// Jo Blueprint hota hai uske uper Prototype hota hai
// Aur jo actual object hota hai uske uper __proto__ hota hai Blueprint ka



obj1.__proto__ = null

console.log(obj1.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString());

// The above code violating a coding principle that is DRY - Don't repeat yourself 

// To avoid this we use 'class' keyword


