// Problem: Create a copy of tea object

const teas = {
    name:"Lemon Tea",
    type:"Green",
    caffeine:"Low",
    cups:{
        one:"1",
        two:"2"
    }
}

let copyTea = {
    ...teas
}

console.log();

console.log(copyTea);
