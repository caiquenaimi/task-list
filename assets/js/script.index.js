/* function executarMetodo () {
    const instancia = new Minhaclasse();
    instancia.meuMetodo();
} */


class Task {
    constructor(task){
        this.task = task;
    } 

    showTask(task) {
        document.getElementById('results').innerHTML += `<div class="task"><p>${task}</p>
        <button id="verify"><img src = "./assets/images/check-svgrepo-com.svg"></button>
        
        
        </div>`
    }   
}

function addTask () {
    const task = new Task();
    task.showTask(text.value);
}