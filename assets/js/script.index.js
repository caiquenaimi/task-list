let verified = false;
let i = 0;

class Task {
    constructor(task) {
        this.task = task;
    }

    showTask(task) {
        document.getElementById('results').innerHTML += `<div class="task"><p>${task}</p>
        <button onclick= "verifyTask()" id="verify"><img src = "./assets/images/check-svgrepo-com (1).svg"></button>
        <button onclick = "removeTask()" id = "trash" ><img  src = "./assets/images/trash-blank-alt-svgrepo-com.svg"></button>
        </div>`;
    }
}

function addTask() {
    const task = new Task();
    task.showTask(text.value);
}



function verifyTask() {
    if (verified == false) {
        document.getElementById("verify").style.backgroundColor = 'green';
        verified = true;
    } else {
        document.getElementById("verify").style.backgroundColor = '#3f3f3f';
        verified = true;
    }
}
function removeTask() {
    document.getElementById('results').remove();
}