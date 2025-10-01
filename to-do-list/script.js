const tarefaInput = document.getElementById("tarefa")
const tarefasContainer = document.getElementById("tarefasContainer")
const adicionarBtn = document.getElementById("adicionar-btn")
const trocarCorBotao = document.getElementById("trocar-cor-btn")

let tarefas = []

const tarefaVazia = () => {
    return tarefaInput.value.trim()===""

}
const criarTarefa = () => {
   let novaTarefa = {
    id: crypto.randomUUID(),
    titulo: tarefaInput.value
   }
   tarefas.push(novaTarefa)
   tarefaInput.value = ""
   return novaTarefa
}

const criarCardTarefa = (tarefaObj) => {
    let div = document.createElement("div")
    tarefasContainer.appendChild(div)
    div.classList.add("tarefa-container")

    let paragrafoTarefa = document.createElement("p")
    paragrafoTarefa.textContent = tarefaObj.titulo

    let botaoConcluirTarefa = document.createElement("button")
    botaoConcluirTarefa.textContent = "OK"
    botaoConcluirTarefa.classList.add("concluir")

    let botaoExcluirTarefa = document.createElement("button")
    botaoExcluirTarefa.textContent = "X"
    botaoExcluirTarefa.classList.add("excluir")

    div.appendChild(paragrafoTarefa)
    div.appendChild(botaoConcluirTarefa)
    div.appendChild(botaoExcluirTarefa)
}

adicionarBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(tarefaVazia()) return

    const novaTarefa = criarTarefa()
    criarCardTarefa(novaTarefa)
})

trocarCorBotao.addEventListener("click",()=>{
if(trocarCorBotao.textContent === "Dark-Mode"){
        trocarCorBotao.textContent = "Light-Mode"
    }
    else{
        trocarCorBotao.textContent = "Dark-Mode"
    }
})