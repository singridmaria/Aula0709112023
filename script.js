function cliqueDoUsuario(numeroDoBotao) {
    if  (numeroDoBotao == 1){
        alert('Clicou no primeiro botão');
    }
    else if (numeroDoBotao == 2){
        alert('Clicou no segundo botão');
    }
    else {
        alert('Clicou em outro botão');
    }

}

function processar(){
    
    const {dinheiro,paes} = pegarDados();
    const precoDoPao = 0.99;
    const total = precoDoPao * paes;
    const resultado = podeComprar(dinheiro,total);
    exibirResultado(resultado);
   
    
}

function exibirResultado(resultado){
    document.getElementById('resultado').innerHTML = resultado;
}

function podeComprar(dinheiro, total){

     if(dinheiro >= total){
        return 'Compra realizada com sucesso';

    }else if (dinheiro < total){
        return 'Dinheiro insuficiente';
    }
  
}

function pegarDados(){
    const dinheiro = document.getElementById('dinheiro').value; //document é um arquivo html que será capaz de extrair informações
    const paes = document.getElementById('paes').value;
    return{dinheiro,paes};

}

