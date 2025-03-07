function greet(name){
    console.log(`Hello ${name}`)
}
// greet("Hitesh")
// greet("Piyush")

// ----------------------------
// IIfe
let congig = function(){
    let settings = {
        theme : "dark"
    }
    return settings
}()

//-----
/*
let person1 = {
    name: "ravi",
    greet: function(){
        console.log(`Hello ${this.name}`);  // this is a context
    }
}
let person2 = {
    name: "hitesh",
}

const bindGreet = person1.greet.bind(person2);
bindGreet()
console.log(bindGreet)

*/


// ----  bind() ,call(), apply()  ------

let person1 = {
    personName : "ravi",
    greet: function(){
        console.log(`Hello, ${this.personName}`);
    }
}

let person2 = {
    personName: "hitesh"
}

person1.greet.call({personName: "Mukul"})

// call() ->change the context of an object

// https://dev.to/codecraftjs/understanding-call-apply-and-bind-essential-methods-in-javascript-d62

