/*fetch("assets/js/configtask.json")
    .then((response) => response.json())
    .then((data) => { 
        for (let elements of data){
            let task = `
            <div class="task">
                <h2 class="name">${elements.name}</h2>
                <p class="time">${elements.time}</p>
                <button class="arrow"> <img src="" alt=""></button>
                <p class="description">${elements.description}</p>
                <button class="delete"> </button>
            </div>
            <select name="status-mode" id="status">
                <option value="todo" selected>To Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
        `;
        document.querySelector("main").insertAdjacentHTML("beforeend", task);
        };
    });*/

    let Newtasks =[
        {
            name:  "Manger",
            time:  "",
            description :  "Blablabla"
    
        }
    ]



    
document.getElementById('addtask').onclick = function createTask() {
        document.querySelector('#createTask').style.visibility = 'visible';
};
document.getElementById('validation').onclick = function validTask() {

    let Newtask = [ {

        name:  "",
        time:  "",
        description :  ""
    }

    ]

    let nom = document.getElementsByClassName('nom')
    let description = document.getElementById('description')
    let date = document.getElementById('date')

    nom.value = Newtask.name;
    description.value = Newtask.description

    Newtasks.push(Newtask)

    document.querySelector('#createTask').style.visibility = 'hidden';
    
    console.log(Newtasks)
}

let tableTask = [
    {
        name: "Manger",
        time: "",
        description: "Blablabla"

    }
]

let inputName = document.getElementsByClassName('nom');
let inputNameValue = inputName.value;

const matache = {
    name: inputNameValue
}
json.stringify(matache)









// let openPop = window.open("_self", "hello", "width=80vw,height=80vw");
        // openPop.document.write("Hello, world!");
        // let section = document.createElement('section'); 
        // section.id = "allNewTask";
        // let pName = document.createElement('textarea');
        // pName.id = "taskName";
        // let pDesc = document.createElement('textarea');
        // pDesc.id = "taskDesc";
        // let pTime = document.createElement('input');
        // pTime.id = "taskTime";
        // document.getElementById('taskTime').type = 'date';
        // section.appendChild("pName");
        // section.appendChild("pDesc");
        // section.appendChild("pTime");