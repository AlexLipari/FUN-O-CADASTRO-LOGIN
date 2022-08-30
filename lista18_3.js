var nome = []
var senha = []
contador = 0
function dadosUsuario (){
    nome[contador]= prompt("Digite um nome!")
    senha[contador]=prompt("digite uma senha!")
    contador++
}
function operacaoSolicitada (){
    return prompt("qual operação deseja fazer? (1) Cadastro (2) Login (3) Excluir (4) Encerrar")
}