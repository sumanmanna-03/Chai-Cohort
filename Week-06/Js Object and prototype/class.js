class Person{
    constructor(fname,lname) {
        this.fname=fname
        this.lname=lname



        console.log(this.getFullName());
        
    }
    getFullName(){
        `${this.fname} ${this.lname}`
    }
}

// We can use only one constructor in js Class

const p1 = new Person('Suman','Manna')
const p2 = new Person('Akash','Kadlag')
// har bakt hum iaha par new keyword ka istemalkar ragha hai, har bar hamara liya ak memory allocate kar raha hai, uska address ak variable ke under store kar raha hai

// const p1 = new Person()
// p1.__proto__ = Person.prototype

// syntactic sugar

//


// console.log(p1.getFullName());
// console.log(p2.getFullName());

// class - Blueprint
// We can make object of class

/**
 * DEFAULT CONSTRUCTOR
 * class Person{
 * }
 * 
 * If we donot add any constructor then the runner add constructor() by default
 * 
 * class Person{
 *      cosntructor()
 * }
 */

/**
 * Parametarized Constructor
 * 
 * class Person{
 *   constructor(pehlaName){
 *       this.xyz=pehlaName
 * }
 * }
 * 
 * const p = new Person("Suman")
 * p.xyz 
 */
