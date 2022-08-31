var nome = []
var senha = []
var contador = 0
var operacao = 0
while (operacao != 4) {
    operacao = operacaoSolicitada()
    if (operacao == 1) {
        dadosUsuario()
    } else if (operacao == 2) {
        var nomeLogin = prompt("qual o nome do cadastro?")
        var senhaLogin = prompt("Qual a senha do login?")
        if (validarLogin(nomeLogin, senhaLogin)) {
            console.log("Login feito com sucesso!")
            console.log("Bem vindo", nomeLogin)
        } else {
            console.log("Nome ou senha incorretos")
        }

    } else if (operacao == 3) {
        var nomeExcluir = prompt("Qual o nome do cadastro que deseja excluir?")
        ExcluirCadastro(nomeExcluir)
        console.log(nome)
        console.log(senha)
    }
}
function dadosUsuario() {
    nome[contador] = prompt("Digite um nome!")
    senha[contador] = prompt("digite uma senha!")
    contador++
}
function operacaoSolicitada() {
    return prompt("qual operação deseja fazer? (1) Cadastro (2) Login (3) Excluir (4) Encerrar")
}
function validarLogin(nomeParametro, senhaParametro) {
    if (procurarNoArray(nomeParametro, nome) && procurarNoArray(senhaParametro, senha)) {
        return true
    } else {
        return false
    }

}
function procurarNoArray(textoParametro, arrayParametro) {
    for (var index = 0; index < contador; index++) {
        if (textoParametro == arrayParametro[index]) {
            return true
        }
    }
    return false
}
function ExcluirCadastro(nomeParametro) {
    for (var index = 0; index < contador; index++) {
        if (nomeParametro == nome[index]) {
            nome[index] = 0
            senha[index] = 0
            organizarArray()
            return console.log("Cadastro de", nomeParametro, "Excluido com sucesso!")
        }
    }
    return console.log("cadastro não encontrado!")
}
function organizarArray() {
    for (var atual = 0; atual < contador - 1; atual++) {
        for (var seguinte = atual + 1; seguinte < contador; seguinte++) {
            if (nome[atual] == 0) {
                nome[atual] = nome[seguinte]
                nome[seguinte] = 0
                senha[atual] = senha[seguinte]
                senha[seguinte] = 0
            }
        }
    }

    var nomeAux = []
    var senhaAux = []

    for (var index = 0; index < contador; index++) {
        if (nome[index] != 0) {
            nomeAux[index] = nome[index]
            senhaAux[index] = senha[index]
        }
    }
    nome = nomeAux
    senha = senhaAux
}
