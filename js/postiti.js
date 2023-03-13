let nomeUsuario

const recebeUsuario = JSON.parse(localStorage.getItem('usuariosCadastrados')).find((e) => {
    nomeUsuario = e.emailUsuario
    return JSON.parse(localStorage.getItem('usuarioSessão')) === e.emailUsuario 
})

if(!recebeUsuario){
    alert('You shall not pass!')
    location.href = 'index.html'
}

console.log(recebeUsuario); //retorna um objeto com os dados do usuário logado

const recebeForm = document.querySelector('form') //captura formulário

const arrayRecados = recebeUsuario.recados //acessa o array de recados dentro do objeto usuario

const tbody = document.querySelector('#tbody') //captura o tbody

document.addEventListener('DOMContentLoaded', (e) => { //ações a serem feitas depois de carregar todo o DOM
    e.preventDefault()   

    document.getElementById('usuarioSessao').innerText = recebeUsuario.nomeUsuario

    postaMsg()
})

function pushMsg(evento){ //carregar msgs no usuario
    evento.preventDefault()

    apagaTodasMsg()

    const tituloRecado = document.getElementById('tituloRecado').value
    const novoRecado = document.getElementById('novoRecado').value

    const recadosUsuario = {
        titulo: tituloRecado,
        recado: novoRecado
    }

    arrayRecados.push(recadosUsuario)

    atualizaUsuario()

    postaMsg()
}

function apagaTodasMsg(){
    document.querySelectorAll('.linhaRecado').forEach(element => {
        element.remove()
    });
}

function postaMsg(){ //adiciona msgs na página

    arrayRecados.forEach((element,index) => {
        
        const tituloRecado = element.titulo
        const novoRecado = element.recado

        const tr = document.createElement('tr')
        tr.className = 'linhaRecado'

        let tdId = document.createElement('td')
        tdId.innerText = index+1  
        tdId.className = 'id'     
        tr.appendChild(tdId)

        const tdTitulo = document.createElement('td')
        tdTitulo.innerText = tituloRecado
        tr.appendChild(tdTitulo)

        const tdMsg = document.createElement('td')
        tdMsg.innerText = novoRecado
        tr.appendChild(tdMsg)

        const tdBtn = document.createElement('td')
        tr.appendChild(tdBtn)

        const btnEditar = document.createElement('button')
        btnEditar.innerText = 'Editar'
        btnEditar.className = 'btnEditar'
        btnEditar.addEventListener('click', editMsg)
        tdBtn.appendChild(btnEditar)

        const btnExcluir = document.createElement('button')
        btnExcluir.innerText = 'Excluir'
        btnExcluir.className = 'btnExcluir'
        btnExcluir.addEventListener('click', rmvMsg)
        tdBtn.appendChild(btnExcluir)

        tbody.appendChild(tr)
    });
}

function atualizaUsuario(){ //atualiza o usuario com novas mensagens
    const listaArmazenada = JSON.parse(localStorage.getItem('usuariosCadastrados'))

    const indexUsuario = listaArmazenada.findIndex((e) => {
        return e.emailUsuario === nomeUsuario    
    })

    listaArmazenada.splice(indexUsuario,1,recebeUsuario)

    localStorage.setItem('usuariosCadastrados',JSON.stringify(listaArmazenada))
}

function editMsg(){
    const novoTitulo = prompt('Digite um novo titulo: ')
    const novaMsg = prompt('Digite uma nova mensagem: ')

    const idIndex = Number(this.parentElement.parentElement.querySelector('.id').textContent) - 1
    
    arrayRecados[idIndex].titulo = novoTitulo
    arrayRecados[idIndex].recado = novaMsg

    atualizaUsuario()
    apagaTodasMsg()
    postaMsg()
}

function rmvMsg(){
    const idIndex = Number(this.parentElement.parentElement.querySelector('.id').textContent) - 1
    arrayRecados.splice(idIndex,1)
    
    atualizaUsuario()
    apagaTodasMsg()
    postaMsg()
}

document.getElementById('botaoSair').addEventListener('click', (e) => { //botão de sair
    if(e){
        alert('Adiós!')
        localStorage.removeItem('usuarioSessão')
        location.href = 'index.html'
    }
}) 