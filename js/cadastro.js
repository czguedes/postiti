const usuarios = JSON.parse(localStorage.getItem('usuariosCadastrados') ?? '[]')


function cadastroUsuario(event) {
    event.preventDefault()
    
    const capturaForm = document.getElementById('cadastroUsuario')
    
    if(capturaForm.senhaUsuario.value !== capturaForm.senhaRepeat.value){
        alert('As senhas não são idênticas!')
        return
    }

    const emailExiste = usuarios.some((usuario) => usuario.emailUsuario === capturaForm.emailUsuario.value)

    if(emailExiste) {
        alert('Esse email já foi cadastrado!')
        return
    }
    
    const cadastroUsuario = {
        nomeUsuario: capturaForm.nomeUsuario.value,
        emailUsuario: capturaForm.emailUsuario.value,
        senhaUsuario: capturaForm.senhaUsuario.value,
        recados: []
    }

    usuarios.push(cadastroUsuario)
    
    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuarios))

    alert('Usuário cadastrado com sucesso!')
    
    location.href = './index.html'
}