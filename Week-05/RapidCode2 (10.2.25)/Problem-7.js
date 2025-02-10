// Problem - Use a for..in loop to print all properties of the tea object

const teas = {
    name:"Lemon Tea",
    type:"Green",
    caffeine:"Low"
}

for(let key in teas){
    console.log(`${key} : ${teas[key]}`);
}

