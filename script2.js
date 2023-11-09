function processar(){

    //IMC = Peso ÷ (Altura × Altura)
    
    const {peso,altura} = pegarDados();
    const IMC = (peso / (altura*altura));
    exibirResultado(IMC);
    
}

function exibirResultado(IMC){
    document.getElementById('calc').innerHTML = IMC;
}

function pegarDados(){
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    return{peso,altura};
}

