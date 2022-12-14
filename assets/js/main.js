//cacher et faire apparaitre l'éditeur de tâche
document.getElementById('addtask').onclick = function createTask() {
    document.querySelector('#createTask').style.visibility = 'visible';
};
document.getElementById('valid').onclick = function validTask() {
document.querySelector('#createTask').style.visibility = 'hidden';
};

//quand on valide, les values des inputs s'ajoutent à l'écran

    const buttonValid = document.getElementById('valid'); //btn validation  
    buttonValid.addEventListener('click', addTask);

    function addTask() {
 
     

    let inputName = document.getElementById('nom');//input nom

    let inputNameValue = inputName.value; //valeur input nom

        inputName.value = ""

    let textArea = document.getElementById('desc');//textArea description

    let textAreaValue = textArea.value; //valeur textArea description

        textArea.value = ""

    let inputDate = document.getElementById('date'); // input date 

    let inputDateValue = inputDate.value; //valeur input date

        inputDate.value = ""

        if (textAreaValue == "" || inputDateValue == "" || inputNameValue == "")

        {
          
        }

        else {
        const tout = document.getElementsByClassName('tout');
        const divTask = document.createElement('div');
        divTask.classList.add("task");

        const newh2 = document.createElement('h2');
        newh2.classList.add("name");
        newh2.innerText = inputNameValue;

        const newDate = document.createElement('p');
        newDate.classList.add("time");
        newDate.innerText = inputDateValue;

        const newArrow = document.createElement('button');
        newArrow.classList.add("arrow");
        const imgNewArrow = document.createElement('img');
        newArrow.appendChild(imgNewArrow);

        const newDesc = document.createElement('p');
        newDesc.classList.add('description');
        newDesc.innerText = textAreaValue;

        const newDelete = document.createElement('button');
        newDelete.classList.add('delete');

        
        divTask.appendChild(newh2);
        divTask.appendChild(newDate);
        divTask.appendChild(newArrow);
        divTask.appendChild(newDesc);
        divTask.appendChild(newDelete);
        tout[0].appendChild(divTask);
        }
    };