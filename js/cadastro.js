function acessoUsuario(event) {
    event.preventDefault()

    const formAcesso = document.getElementById('cadastroUsuario')
    
    formAcesso.addEventListener('submit', window.location.href = 'postiti.html')

}