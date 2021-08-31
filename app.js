/*variables */
// very beautiful comment for matteo
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
let infoStorage = (localStorage.getItem('tasks'))

const generateTemplate = todo => {
    const html = `
    <li>
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`
    list.innerHTML += html;
    console.log('ciao')

}

if (!infoStorage) {
    infoStorage = [];
} else { 
    JSON.parse(localStorage.getItem('infoStorage'))
    infoStorage.forEach(element => {
        generateTemplate(element)
        
    });

}

addForm.addEventListener('submit', e => {
    const todo = addForm.add.value.trim();
    e.preventDefault();
    if (todo.length) {
        let tasks = []
        generateTemplate(todo); 
        tasks.push(todo);
        localStorage.setItem('tasks', JSON.stringify(tasks))
        addForm.reset();  
    }

}); 

/*Delete Item*/
list.addEventListener('click', e => {
console.log('clicked')
if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
}

})

