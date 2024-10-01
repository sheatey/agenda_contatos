const corpoTabela = document.querySelector('tbody')
const inputNome = document.getElementById('nome')
const inputTelefone = document.getElementById('telefone')
const formAdicionar = document.getElementById('form-adicionar')

function validaTelefone(tel) {
    tel = Number(tel)
    return !isNaN(tel)
}

inputTelefone.addEventListener('keyup', function(e) {
    let telefoneValidado = validaTelefone(e.target.value)

    if (!telefoneValidado) {
        inputTelefone.classList.add('error')
    } else {
        inputTelefone.classList.remove('error')
    }
})

let linhas = ''
let nomeContatos = []
let telefoneContatos = []

formAdicionar.addEventListener('submit', function(e) {
    e.preventDefault()  // Evita comportamento padrão do botão

    adicionarContato()
})

function validaContatoExistente(nome, telefone) {
    return nomeContatos.includes(nome) && telefoneContatos.includes(telefone) 
}

function adicionarContato() {
    let telefoneValidado = validaTelefone(inputTelefone.value)

    let contatoExistente = validaContatoExistente(inputNome.value, inputTelefone.value)

    if (!contatoExistente) {
        if (!telefoneValidado) {
            alert('Dados digitados são inválidos!')
        } else {
            let novoContato = '<tr>'
            novoContato += `<td>${inputNome.value}</td>`
            nomeContatos.push(inputNome.value)
            novoContato += `<td>${inputTelefone.value}</td>`
            telefoneContatos.push(inputTelefone.value)
            novoContato += '</tr>'
    
            linhas += novoContato
    
            corpoTabela.innerHTML = linhas

            atualizaNumeroContatos()
        }
    } else {
        alert("O contato digitado já foi adicionado!")
    }

    inputNome.value = ''
    inputTelefone.value = ''
    inputTelefone.classList.remove('error')
}

function atualizaNumeroContatos() {
    numero = document.querySelector('span')
    numero.innerHTML = `${telefoneContatos.length}`
}
