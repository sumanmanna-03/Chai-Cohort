const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');

const todoItemsContainer = document.getElementById('todo-items-container');

addBtn.addEventListener('click', ()=>{
    const value = todoInput.value;
    // console.log('User entered',value);

    const li = document.createElement('li') // <li></li>
    li.innerText = value // <li> Value </li>

    const delButton = document.createElement('button'); // We are creating delButton outside card then we link it with card
    delButton.innerText = 'X'

    delButton.addEventListener('click' ,()=> {
        li.remove();
    })

    li.appendChild(delButton)

    todoItemsContainer.appendChild(li); // existing item ka sath aur koi item add karo

    todoInput.value = ''; // after clicking it will clear input box
    
});