const tarefas = ["Estudar HTML", "Estudar CSS", "Estudar JS"]

function render() {
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    tarefas.forEach(function(tarefa){
        const li = document.createElement("li")
        li.innerText = tarefa
        ul.appendChild(li)
    })
}
function add_new_task() {
    const input = document.querySelector("input")    
    tarefas.push(input.value)
    input.value = ""
    render()
}   
render()