const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elList = document.querySelector(".list");

let todos = []

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    let obj = {
        id: todos.length + 1,
        name: elInput.value
    }

    todos.push(obj)
    elInput.value = null    
    elList.innerHTML = null

    for(let work of todos) {
        const newItem = document.createElement("li")
        const googlePlay = document.createElement("li")
        newItem = textContent = work.name
        elList.appendChild(newItem)
    }
})