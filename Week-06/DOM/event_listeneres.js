function changeColor(color){
    document.body.style.backgroundColor = color
}

// --------------- Dark color ---------------

/*const darkButton = document.getElementById('dark-mode-button')

console.log(darkButton);

darkButton.addEventListener('click',function(){
    console.log('i got clicked');
    changeColor('black')
})

darkButton.addEventListener('click', function(){
    console.log('Storing Dark Mode value in DB');
})
    */

// ------------------ White color ----------

/*
const whiteButton = document.getElementById('white-mode-button')

whiteButton.addEventListener('click', function(){
    console.log('Storing White Mode value in DB');
    changeColor('white')
})
    */

const headerName = document.getElementById('header-name')

const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click',() => {
    console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor

    if(!currentColor || currentColor === 'white'){
        changeColor('black')
        themeButton.innerText = 'Light Mode'
    } else {
        changeColor('white')
        themeButton.innerText = 'Dark Mode'
    }
})