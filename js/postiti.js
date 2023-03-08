const recebeUsuario = JSON.parse(localStorage.getItem('usuariosCadastrados')).find((e) => {   //carrega APENAS os dados do usuário logado
    return JSON.parse(localStorage.getItem('usuarioSessão')) === e.emailUsuario 
})

if(!recebeUsuario){
    alert('You shall not pass!')
    location.href = 'index.html'
}

console.log(recebeUsuario); //retorna um objeto com os dados do usuário logado

const recebeForm = document.querySelector('form') //captura formulário

const arrayRecados = recebeUsuario.recados

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

recebeForm.submeterRecado.addEventListener('click', (e) => {
    e.preventDefault()

    const tituloRecado = recebeForm.tituloRecado.value
    const msgRecado = recebeForm.novoRecado.value

    // addMsg(tituloRecado,msgRecado)

    const novoRecado = {
        tituloRecado: tituloRecado,
        novoRecado: msgRecado
    }

    arrayRecados.push(novoRecado)
})

