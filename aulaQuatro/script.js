function calculaAnoNascimento (idade, mesAtual, mesNascimento){
    var anoAtual = 2024;

    if(mesAtual < mesNascimento){
        var anoCalculado = anoAtual - idade - 1;
    } else {
        var anoCalculado = anoAtual - idade;
    }


    console.log(anoCalculado);
    return anoCalculado;

}

calculaAnoNascimento(23,7,12);
