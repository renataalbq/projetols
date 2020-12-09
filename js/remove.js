function remove(){
    var td = document.querySelector("td")
    td.parentNode.remove()
};

function check(placa, hora,minuto){
    tempoPercorrido = calcHoras(placa,hora,minuto)
    result = tempoPercorrido
    var c = confirm(`${result}\nDeseja realmente excluir? `);
    if (c) {
        remove();
    }
    else{
        return false;
    }

}
