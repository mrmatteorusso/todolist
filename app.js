const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
    const html = `
    <li>
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`
    list.innerHTML += html;
    console.log('ciao')

}

addForm.addEventListener('submit', e => {

    const todo = addForm.add.value.trim();
    e.preventDefault();
    if (todo.length) {
        generateTemplate(todo);  
        addForm.reset();  

    }

}); 

list.addEventListener('click', e => {
console.log('clicked')
if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
}

})