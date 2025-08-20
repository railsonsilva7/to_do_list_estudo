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
render()