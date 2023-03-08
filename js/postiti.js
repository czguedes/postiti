const recebeUsuario = JSON.parse(localStorage.getItem('usuariosCadastrados')).find((e) => {   //carrega APENAS os dados do usuário logado
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
})


document.getElementById('botaoSair').addEventListener('click', (e) => { //botão de sair
    if(e){
        alert('Adiós!')
        localStorage.removeItem('usuarioSessão')
        location.href = 'index.html'
    }
}) 

function postaMsg(novaMsg){ //adiciona msgs na página e no array recados

    novaMsg.preventDefault();

    const tituloRecado = document.getElementById('tituloRecado').value
    const novoRecado = document.getElementById('novoRecado').value

    const tr = document.createElement('tr')

    function numMsg(){
        let numMsg = Number(arrayRecados.length) ?? '1'
        return ++numMsg
    }
    
    let tdId = document.createElement('td')
    tdId.innerText = numMsg()
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
    tdBtn.appendChild(btnEditar)

    const btnExcluir = document.createElement('button')
    btnExcluir.innerText = 'Excluir'
    tdBtn.appendChild(btnExcluir)

    tbody.appendChild(tr)

    const recadosUsuario = {
        titulo: tituloRecado,
        recado: novoRecado
    }

    arrayRecados.push(recadosUsuario)
}

localStorage.getItem



