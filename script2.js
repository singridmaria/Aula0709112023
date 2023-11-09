function processar(){

    //IMC = Peso ÷ (Altura × Altura)
    
    const {peso,altura} = pegarDados();
    const IMC = peso / (altura*altura);
    //const resultado = verificação(peso,altura);
    exibirResultado(IMC);
    
}

function exibirResultado(IMC){
    document.getElementById('calc').innerHTML = IMC;
}

// function verificação(resultado){

//      if(dinheiro >= total){
//         return 'Compra realizada com sucesso';

//     }else if (dinheiro < total){
//         return 'Dinheiro insuficiente';
//     }
//   6
// }

function pegarDados(){
    const peso = document.getElementById('peso').value; //document 
    const altura = document.getElementById('altura').value;
    return{peso,altura};

}

