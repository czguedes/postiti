function acessoUsuario(event) {
    event.preventDefault()

    const formAcesso = document.getElementById('acessoUsuario')
    
    formAcesso.addEventListener('submit', window.location.href = 'postiti.html')

}
