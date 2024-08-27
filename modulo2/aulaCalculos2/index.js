function confereMaioridade(idade) {
  var idadeParaTerMaioridade = 18;

  if (retornaMaiorOuNao(idade, idadeParaTerMaioridade)) {
    console.log("voce é maior de idade");
  } else {
    console.log("você não é maior de idade ");
  }
}

function retornaMaiorOuNao(idade, idadeParaTerMaioridade) {
  if (idade > idadeParaTerMaioridade) {
    return true;
  } else {
    return false;
  }
}

confereMaioridade(17);
