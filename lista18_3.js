var nome = []
var senha = []
contador = 0

dadosUsuario()
function dadosUsuario (){
    nome[contador]= prompt("Digite um nome!")
    senha[contador]=prompt("digite uma senha!")
    contador++
}
function operacaoSolicitada (){
    return prompt("qual operação deseja fazer? (1) Cadastro (2) Login (3) Excluir (4) Encerrar")
}
function validarLogin(nomeParametro , senhaParametro){
    if(procurarNoArray(nomeParametro , nome) && procurarNoArray(senhaParametro , senha)){
        return true
    }else{
        return false
    }

}
function procurarNoArray(textoParametro , arrayParametro){
for (var index = 0; index < contador; index ++){
    if (textoParametro == arrayParametro[index]){
        return true
    }
}
return false
}
function ExcluirCadastro(nomeParametro){
    for (var index = 0;index< contador; index++){
        if (nomeParametro == nome[index]){
            nome[index] = 0
            senha[index] = 0
        }
    }
    for (var atual =0; atual < contador - 1; atual++){
        for(var seguinte = atual +1; seguinte < contador; seguinte++){
            if (nome[atual] == 0){
                nome[atual] = nome[seguinte]
                nome[seguinte] = 0
                senha[atual] = senha[seguinte]
                senha[seguinte] = 0
            }
        }
    }
    
    
}
