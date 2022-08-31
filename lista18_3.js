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
