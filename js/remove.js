function remove(placa){
    var td = document.querySelector("td")
    td.parentNode.remove()

    //excluindo do sessionStorage
    var garagem = JSON.parse(sessionStorage.getItem('veiculo'));
    console.log(garagem);
	for(var i = 0 ; i < garagem.length; i++){
		if(garagem[i].placa == placa){
			garagem.splice(i, 1);
		}
	}
    sessionStorage.setItem('veiculo', JSON.stringify(garagem));
};

function check(placa,hora,minuto){
    tempoPercorrido = calcHoras(placa,hora,minuto)
    result = tempoPercorrido
    var c = confirm(`${result}\nDeseja realmente excluir? `);
    if (c) {
        remove(placa);
    }
    else{
        return false;
    }

}

