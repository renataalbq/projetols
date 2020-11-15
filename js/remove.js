function remove(placa){

}

function check(placa,hora,minuto){
    tempoPercorrido = calcHoras(placa,hora,minuto)
    result = tempoPercorrido
    var c = confirm(`${result}\nDeseja realmente excluir? `);
    if (c) {
        remove(placa);
        console.log('Carro removido!')
    }
    else{
        return false;
    }

}