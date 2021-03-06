/*variables */
// very beautiful comment for matteo
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
        console.log(`${todo} has been added to html list`)
        console.log(`Local storage now contains ${storedItems}`)
    }
});

/*Removing item*/

list.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        let removedItem = e.target.parentElement.firstElementChild.innerText;
        console.log(`${removedItem} has been removed from the html list`);
        console.log(storedItems)
        const newArr = storedItems.filter(item => item !== removedItem)
        console.log(newArr)
        storedItems = newArr
        console.log(`Local storage now contains ${storedItems} `)
    }
})

