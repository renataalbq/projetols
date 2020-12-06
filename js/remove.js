function remove(){
    var td = document.querySelector("td")
    td.parentNode.remove()
};

function check(hora,minuto){
    tempoPercorrido = calcHoras(hora,minuto)
    result = tempoPercorrido
    var c = confirm(`${result}\nDeseja realmente excluir? `);
    if (c) {
        remove();
    }
    else{
        return false;
    }

}
