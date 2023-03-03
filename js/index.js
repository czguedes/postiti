
function acessoUsuario(event) {
    event.preventDefault()
    
    const capturaForm = document.getElementById('acessoUsuario')

    const recebeUsuarios = JSON.parse(localStorage.getItem('usuariosCadastrados'))

    const confirmaUsuario = recebeUsuarios.findIndex((usuario) => capturaForm.emailUsuario.value === usuario.emailUsuario)

    const confirmaSenha = recebeUsuarios.findIndex((senha) => capturaForm.senhaUsuario.value === senha.senhaUsuario)

    if(confirmaUsuario === -1 || confirmaSenha === -1){
        alert('Email ou senha inválidos!')
        return
    }

    location.href = 'postiti.html'
}
