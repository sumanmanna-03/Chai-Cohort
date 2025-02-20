// document.write("Hello from js")

/*function changeBackgroundColor(){
    document.body.style.backgroundColor = 'black';
}

function changeBackgroundWhite(){
    document.body.style.backgroundColor = 'white'
}*/

// The above two function violate DRY principle
// So the code will be

function changeColor(color){
    document.body.style.backgroundColor = color
}

// Event listeres