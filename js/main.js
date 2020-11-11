var cadastrar = document.querySelector("#cadastrar");

cadastrar.addEventListener("click", function(event) {
   event.preventDefault();
 
   var form = document.querySelector("#formulario");

   var modelo = form.modelo.value.trim().toUpperCase()
   var placa = form.placa.value.trim().toUpperCase()
   var horaEntrada = new Date();
   var hora = horaEntrada.getHours();
   var minutos = horaEntrada.getMinutes();


    var veiculo = {
        modelo: modelo,
        placa: placa,
        hora: hora,
        minutos: minutos
    }  


   if (!modelo || !placa){
      alert("Preencha todos os campos!");
		return false;
   }

   else if (!modelo && !placa){
      alert("Preencha todos os campos!");
		return false;
   }

    if(sessionStorage.getItem('veiculo') === null){
        var veiculos = [];
        veiculos.push(veiculo);
        sessionStorage.setItem('veiculo', JSON.stringify(veiculos));
    } else {
        var veiculos = JSON.parse(sessionStorage.getItem('veiculo'));
        veiculos.push(veiculo);
        sessionStorage.setItem('veiculo', JSON.stringify(veiculos));
    }


   createTr(veiculo)


   form.reset();

});


function createTr(veiculo){

    var form = document.querySelector("#formulario");

    var modelo = form.modelo.value.trim().toUpperCase()
    var placa = form.placa.value.trim().toUpperCase()
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours();
    var minutos = horaEntrada.getMinutes();
    var horaFormat = `${hora}:${minutos}`

    var veiculoTr = document.createElement("tr");

    var modeloTd = document.createElement("td");
    var placaTd = document.createElement("td");
    var horaTd = document.createElement("td")
    var finalizarTd = document.createElement("td")
    var excluirTd = document.createElement("td")
    
    var finalizarBtn = '<td><button onclick="calcHoras(\''+ placa +'\',\''+ hora +'\',\''+ minutos +'\')" id="time-button" class="btn btn-info"><img id="table-btn" src="images/time_white.png"></button></td>'
    var excluirBtn = '<td><button id="clear-button" class="btn btn-danger"><img id="table-btn" src="images/clear_white.png"></button></td>'
    
 
    modeloTd.textContent = modelo;
    placaTd.textContent = placa;
    horaTd.textContent = horaFormat;
    finalizarTd.innerHTML = finalizarBtn;
    excluirTd.innerHTML = excluirBtn;
 
    veiculoTr.appendChild(modeloTd);
    veiculoTr.appendChild(placaTd);
    veiculoTr.appendChild(horaTd)
    veiculoTr.appendChild(finalizarTd);
    veiculoTr.appendChild(excluirTd)
    
    var tabela = document.querySelector("#garagem");
 
    tabela.appendChild(veiculoTr);

}


function exibeVeiculos(){
	var veiculos = JSON.parse(sessionStorage.getItem('veiculo'));
	var exibir = document.getElementById('garagem');

	exibir.innerHTML = '';

	for(var i = 0; i < veiculos.length; i++){
		var modelo = veiculos[i].modelo;
		var placa = veiculos[i].placa;
		var hora = veiculos[i].hora;
		var minutos = veiculos[i].minutos;
		exibir.innerHTML += '<tr><td>'+ modelo + '</td>'+
		 						'<td>'+ placa + '</td>' +
                                '<td>'+ hora + ':' + minutos + '</td>' +
                                '<td><button onclick="calcHoras(\''+ placa +'\',\''+ hora +'\',\''+ minutos +'\')" id="time-button" class="btn btn-info"><img id="table-btn" src="images/time_white.png"></button></td>'+
		 						'<td><button class="btn btn-danger"><img id="table-btn" src="images/clear_white.png"></button></td>'+
		 					'</tr>';
	}
}