const tarefas = ["Estudar HTML", "Estudar CSS"]
function render() {
  const ul = document.querySelector("ul")
  ul.innerHTML = ""
  tarefas.forEach(function (tarefa) {
    const li = document.createElement("li")
    li.innerText = tarefa
    ul.appendChild(li)
    console.log(ul)
  })
}
function add() {
  const input = document.querySelector("input")
  tarefas.push(input.value)
  input.value = ""
  console.log(tarefas)
  render()
}
render()
