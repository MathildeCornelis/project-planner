// document.getElementsByClassName('arrow').onclick = function showDesc() {
//     let desc = document.getElementsByClassName('description');
    
//     if ( desc.style.display == 'none') {
//         desc.style.display = 'flex'
//     }
//     else {
//         desc.style.display = 'none'
//     };
// };






//cacher et faire apparaitre l'éditeur de tâche
document.getElementById('addtask').onclick = function createTask() {
    let createTask = document.querySelector('#createTask')
    
    if ( createTask.style.display == 'none') {
        createTask.style.display = 'flex'
    }
    else {
        createTask.style.display = 'none'}

};
document.getElementById('valid').onclick = function validTask() {
document.querySelector('#createTask').style.display = 'none';
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
        newDate.innerText = tempsRestant();
        inputDate.value = "";

        const newArrow = document.createElement('button');
        newArrow.classList.add("arrow");
        const imgNewArrow = document.createElement('img');
        imgNewArrow.src = "/assets/img/arrow.png";
        imgNewArrow.id=('plus');
        newArrow.appendChild(imgNewArrow);

        const newDesc = document.createElement('p');
        newDesc.classList.add('description');
        newDesc.innerText = textAreaValue;

        const newDelete = document.createElement('button');
        newDelete.classList.add('delete');
        const newImageDelete = document.createElement('img');
        newImageDelete.src = "/assets/img/poubelle.png";
        newImageDelete.id=('poubelle');
        newDelete.appendChild(newImageDelete);

        const newSelect = document.createElement('select');
        newSelect.classList.add("status");

        const newOption1 = document.createElement('option');
        newOption1.value = 'todo';
        newOption1.innerText = 'To Do';

        const newOption2 = document.createElement('option');
        newOption2.value = 'doing';
        newOption2.innerText = 'Doing';

        const newOption3 = document.createElement('option');
        newOption3.value = 'done';
        newOption3.innerText = 'Done';

        newSelect.appendChild(newOption1);
        newSelect.appendChild(newOption2);
        newSelect.appendChild(newOption3);

        divTask.appendChild(newh2);
        divTask.appendChild(newDate);
        divTask.appendChild(newDesc);
        divTask.appendChild(newDelete);
        divTask.appendChild(newSelect);
        divTask.appendChild(newArrow);
        tout[0].appendChild(divTask);
        
        // créer un id unique à div.task
        const uniqueId = divTask.setAttribute('id', Date.now());
        
        }
    };

// initialiser les filtres

    function tempsRestant() {
        let today = new Date ();
    
        let inputDate = document.getElementById('date'); // input date 
    
        let inputDateValue = inputDate.value; //valeur input date
        console.log(inputDate);
    
        let futur = new Date(inputDateValue);
    
        let result = futur.getTime();
    
        let taskTime;
        if (( Math.floor((result - today.getTime())/ (1000 * 60 * 60 *24))) >= 1)
        {
        taskTime = 'Il reste ' +(( Math.floor((result - today.getTime()) / (1000 * 60 * 60 *24))) + 1) + ' jours';}
            else if (( Math.floor((result - today.getTime())/ (1000 * 60 * 60 *24))) < 1 && ( Math.floor((result - today.getTime())/ (1000 * 60 * 60 *24))) >= 0) {
            taskTime = "Demain"}
            
            else if (( Math.floor((result - today.getTime())/ (1000 * 60 * 60 *24))) < 0 && ( Math.floor((result - today.getTime())/ (1000 * 60 * 60 *24))) >= -1) {
                taskTime = "Aujourd'hui"
            }

            else {
                taskTime = "Fini"
            }

            console.log(( Math.floor((result - today.getTime()) / (1000 * 60 * 60 *24))));
        return taskTime;
    };

document.getElementById('aFaire').onclick = function () {
    let done = document.getElementsByClassName('status'); 
    
    for (i=0; i < done.length; i++) {
    let doneValue = done[i].value;
    if (doneValue != 'todo') {
        let task = document.getElementsByClassName('task');

                task[i].style.display = 'none'
        }
        else {
            let task = document.getElementsByClassName('task');
                task[i].style.display = 'block'
        };     
    }
};
document.getElementById('Fait').onclick = function () {
    let done = document.getElementsByClassName('status'); 
    for (i=0; i < done.length; i++ ) {
        let doneValue = done[i].value;
        if (doneValue != 'doing') {
            let task = document.getElementsByClassName('task');

                task[i].style.display = 'none'
        }
        else {
            let task = document.getElementsByClassName('task');
                task[i].style.display = 'block'
        };     
    };
};
document.getElementById('Fini').onclick = function () {
    let done = document.getElementsByClassName('status'); 
    let task
    for (i=0; i < done.length; i++ ) {
        let doneValue = done[i].value;
        console.log(doneValue != 'done')
        if (doneValue != 'done') {
            task = document.getElementsByClassName('task');
        console.log(task[i])
                task[i].style.display = 'none'
        }
        else {
            task = document.getElementsByClassName('task');
                task[i].style.display = 'block'
        };     
    };   
};

//rendre visible, invisible les filtres

document.getElementById('filtre').onclick = function createTask() {
    let menu = document.querySelector('#trie')
    
    if ( menu.style.visibility == 'hidden') {
        menu.style.visibility = 'visible'
    }
    else {
        menu.style.visibility = 'hidden'
    }

};

//supprimer tâche quand on clique sut la poubelle
    
    // let uniqueId = document.getElementById('id', Date.now());
    // console.log(uniqueId);


    window.addEventListener('load', function showDesc () {
    
        let click = document.getElementsByClassName('arrow');
        for (let i = 0; i < click.length; i++){
            let clicks  =  click[i];
            clicks.onclick = function() {
                let desc = document.getElementsByClassName('description');
                for (let x=0; x < desc.length; x++){
                    console.log('test');
                    let descs = desc[x];
                    if(i == x) {
                    descs.style.display='flex'}
                    else if (i != x){
                        descs.style.display='none'
                    }
                }
            }
        }
        setTimeout(showDesc, 1000)
    });



    window.onload= function del () {
        let click = document.getElementsByClassName('delete')
        for (let i = 0; i < click.length; i++){
            let clicks  =  click[i];
            clicks.onclick = function() {
            let remov = document.getElementsByClassName('task')
            for (let x = 0 ; x < remov.length; x++ ) {
                console.log('test')
            let removs = remov[x];
            
            if (i == x)
            removs.remove()
            }
        }
        }
    
    
        setTimeout(del , 1000)
    }
    