var cadastrar = document.querySelector("#cadastrar");

cadastrar.addEventListener("click", function(event) {
   event.preventDefault();
 
   var form = document.querySelector("#formulario");

   var modelo = form.modelo.value.trim().toUpperCase()
   var placa = form.placa.value.trim().toUpperCase()
   var horaEntrada = new Date();
   var hora = horaEntrada.getHours()
   var minutos = horaEntrada.getMinutes()
   var horaFormat = `${hora}:${minutos}`

   if (!modelo || !placa){
      alert("Preencha todos os campos!");
		return false;
   }

   else if (!modelo && !placa){
      alert("Preencha todos os campos!");
		return false;
   }


   var veiculoTr = document.createElement("tr");

   var modeloTd = document.createElement("td");
   var placaTd = document.createElement("td");
   var horaTd = document.createElement("td")
   var finalizarTd = document.createElement("td")
   var excluirTd = document.createElement("td")
   
   var finalizarBtn = '<td><button id="time-button" class="btn btn-info"><img id="table-btn" src="images/time_white.png"></button></td>'
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

   form.reset();

});

