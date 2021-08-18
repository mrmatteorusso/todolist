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
        let tasks;

        // in verità questo controllo è corretto ma va fatto all'inizio, allo start time
        // non qui, perchè qui avviene solamente quando fai submit, e noi vogliamo popolare i task subito
        // una volta popolati i tasks, vanno riempiti (generateTemplate)
        // In questo caso va fatta un altra operazione del localStorage: il set
        // perchè vogliamo settare il nuovo item che abbiamo appena inserito dopo aver fatto submit
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        generateTemplate(todo); 
        tasks.push(todo);
        localStorage.setItem('tasks', JSON.stringify(tasks))
        addForm.reset();  
        // console.log(tasks.forEach( e => console.log(e)))

    }

}); 


list.addEventListener('click', e => {
    // so che è una piccolezza, ma occhio all'indentazione
    // ti da struttura e una logica di lettura migliore del codice
    console.log('clicked')
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

