let toDoInput = document.querySelector('#toDoText');
let addButton = document.querySelector('#add');
let toDoList = document.querySelector('#toDoList');

addButton.addEventListener('click', function(){
    let toDoText = toDoInput.value;

    if (toDoText != "") {
        
        // clear out input field
        toDoInput.value = "";

        let newToDo = document.createElement('li');
        newToDo.innerText = toDoText;

        newToDo.addEventListener('click', function() {

            newToDo.classList.toggle('crossed-off');

            setTimeout(() => {
                this.remove();
            }, 1000)

        })

        toDoList.appendChild(newToDo);
    }
})