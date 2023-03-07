const recebeUsuario = JSON.parse(localStorage.getItem('usuariosCadastrados')).find((e) => {   //carrega APENAS os dados do usuário logado
    return JSON.parse(localStorage.getItem('usuarioSessão')) === e.emailUsuario
})

console.log(recebeUsuario);

const recebeForm = document.querySelector('form') //captura formulário

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


// recebeForm.addEventListener('submit')

