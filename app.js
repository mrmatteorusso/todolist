const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
// salvato gli items dal local storage in una variabile
let storedItems = localStorage.getItem('tasks');

const generateTemplate = todo => {
    const html = `
    <li>
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`
    
    list.innerHTML += html;
    console.log('created!');
}

if (!storedItems) {
    storedItems = [];
} else {
    storedItems = JSON.parse(storedItems);
    storedItems.forEach(item => {
        generateTemplate(item);
    });
}

addForm.addEventListener('submit', e => {
    const todo = addForm.add.value.trim();
    e.preventDefault();
    if (todo.length) {
        generateTemplate(todo); 
        storedItems.push(todo);
        localStorage.setItem('tasks', JSON.stringify(storedItems))
        addForm.reset();
    }
});

list.addEventListener('click', e => {
    console.log(e.target);
    // so che è una piccolezza, ma occhio all'indentazione
    // ti da struttura e una logica di lettura migliore del codice
    console.log('clicked')
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        console.dir(e.target.parentElement.firstElementChild.innerText);
    }
})
