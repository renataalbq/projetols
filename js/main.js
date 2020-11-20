var cadastrar = document.querySelector("#cadastrar");


cadastrar.addEventListener("click", function(event) {
   event.preventDefault();
 
   var form = document.querySelector("#formulario");
   var modelo = form.modelo.value.trim().toUpperCase()
   var placa = form.placa.value.trim().toUpperCase()
   var horaEntrada = new Date();
   var hora = horaEntrada.getHours();
   var minutos = horaEntrada.getMinutes();

   if (!modelo || !placa){
      alert("Preencha todos os campos!");
		return false;
   }

   let validaPlaca = new RegExp("^[a-zA-Z]{3}[0-9]{4}$");
   if (validaPlaca.test(placa) == false){
      alert('Placa Inválida!')
   }

   var veiculo = {
      modelo: modelo,
      placa: placa,
      hora: hora,
      minutos: minutos
   }  

   if(sessionStorage.getItem('veiculo') === null){
      var garagem = [];
      garagem.push(veiculo);
      sessionStorage.setItem('veiculo', JSON.stringify(garagem)); 
   } else { 
      var garagem = JSON.parse(sessionStorage.getItem('veiculo'));
      garagem.push(veiculo);
      sessionStorage.setItem('veiculo', JSON.stringify(garagem));
   }

   var veiculoTr = document.createElement("tr");
   var editarBtn = '<button id="edit-button" class="btn"><img id="table-btn" src="images/edit_white.png"></button>'
   var excluirBtn = '<button onclick="check(\''+ placa +'\',\''+ hora +'\',\''+ minutos +'\')"" id="clear-button" class="btn btn-danger"><img id="table-btn" src="images/clear_white.png"></button>'

   veiculoTr.innerHTML = `
              <td>${veiculo.modelo}</td>
              <td>${veiculo.placa}</td>
              <td>${veiculo.hora}:${veiculo.minutos}</td>
              <td>${editarBtn} </td>
              <td>${excluirBtn}</td>
              `;

   
   var tableGaragem = document.querySelector("#garagem");

   tableGaragem.appendChild(veiculoTr);

   form.reset();

   exibeVeiculos()

});


function exibeVeiculos(){
	var garagem = JSON.parse(sessionStorage.getItem('veiculo'));
	var exibir = document.getElementById('garagem');

	exibir.innerHTML = '';

	for(var i = 0; i < garagem.length; i++){
		var modelo = garagem[i].modelo;
		var placa = garagem[i].placa;
		var hora = garagem[i].hora;
		var minutos = garagem[i].minutos;
      exibir.innerHTML += '<tr> <td>'+ modelo + '</td>'+
      '<td>'+ placa + '</td>' +
      '<td>'+ hora + ':' + minutos + '</td>' +
      '<td><button id="edit-button" class="btn"><img id="table-btn" src="images/edit_white.png"></button></td>'+
		'<td><button onclick="check(\''+ placa +'\',\''+ hora +'\',\''+ minutos +'\')" class="btn btn-danger"><img id="table-btn" src="images/clear_white.png"></button></td>'+
		'</tr>';
	}
}
