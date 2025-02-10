let p1 = {
    fname:'Hitesh',
    lname:'Ch'
}

// This will change the original Object
let p2 = p1
p2.fname = 'Piyush Garg';

// Object do not copy value it copy reference 

console.log(p2);
console.log(p1); 

// To do copy of an object we have to create an empty object
// This process will not change the original Object
let p3={
    fname:p1.fname,
    lname:p1.lname
}

p3.fname = "Suman";
p3.lname = "Manna";

// This is the way to copy of an object

console.log(p3)

// Other way to copy an object -> This process will not change the original object
let p4 = {
    ...p1   //This is call spread Operator but this will not work in inner object
}

p4.fname = "Babu"

console.log(p4)

// Spread Opeartor make a shallow copy of an object into an another object-> means uper uper copy no copy of inner object so if we want to change any inner key,value of new object it will also change the source object 



// -------------------------------------------------------------------------------




// There have a process which copy the nested object that is call deep copy -> ander se copy karega
// There have so many process to do deep copy

// 1.
let p5={
    fname:"Suman",
    lname:"Manna",
    address: {
        homeAddresss:"x",
        pincode:777777
    }
}

const p5KaString = JSON.stringify(p5); //In this step we are transforming OBJECT type to STRING type

console.log(p5KaString);
let p6 = JSON.parse(p5KaString); //In this process we are transforming that STRING type to OBJECT type

p6.fname = "Saheb"

console.log(p6);

//  In this process we are transforming OBJECT type to STRING type so the address change here. After that we transform that STRING to OBJECT .
// The main reason of doing this if we change the inner object of new oject , it will not change the original object -> deep copy

// Function obj -> String -> Copy -> Object  ===> This is the process