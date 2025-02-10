// Problem: Remove the type property from the tea object

const teas = {
    name:"Lemon Tea",
    type:"Green",
    caffeine:"Low"
}

delete teas.type;

console.log(teas);