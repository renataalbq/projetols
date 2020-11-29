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


   var horaFormat = `${hora}:${minutos}`

   if (!modelo || !placa){
      alert("Preencha todos os campos!");
      return false;
   }

   let validaPlaca = new RegExp("^[a-zA-Z]{3}[0-9]{4}$");
   if (validaPlaca.test(placa) === false){
      alert('Placa Inválida!')

      placaClass.value = "";
      placaClass.textContent = "Placa Inválida";

      var inputInvalidTimeOut;

      function timeOut() {
         inputInvalidTimeOut = setTimeout(wrongInput, 2000)

         return inputInvalidTimeOut
      }

      function wrongInput() {
         placaClass.classList.remove("invalida")
      }

      timeOut()

      return false

   }
   
   

   var veiculoTr = document.createElement("tr");

   var modeloTd = document.createElement("td");
   var placaTd = document.createElement("td");
   var horaTd = document.createElement("td");
   var editarTd = document.createElement("td");
   var excluirTd = document.createElement("td");

   var editarBtn = '<button id="edit-button" class="btn"><img id="table-btn" src="images/edit_white.png"></button>'
   var excluirBtn = '<button onclick="check(\''+ placa +'\',\''+ hora +'\',\''+ minutos +'\')" id="clear-button" class="btn btn-danger"><img id="table-btn" src="images/clear_white.png"></button>'

   veiculoTr.setAttribute('class', 'veiculoTr');
   placaTd.setAttribute('class', 'placaBody');

   modeloTd.textContent = modelo;
   placaTd.textContent = placa;
   horaTd.textContent = horaFormat;
   editarTd.innerHTML = `<td>${editarBtn} </td>`;
   excluirTd.innerHTML = `<td>${excluirBtn} </td>`;

   veiculoTr.appendChild(modeloTd);
   veiculoTr.appendChild(placaTd);
   veiculoTr.appendChild(horaTd);
   veiculoTr.appendChild(editarTd)
   veiculoTr.appendChild(excluirTd)

   
   var tableGaragem = document.querySelector("#garagem");

   tableGaragem.appendChild(veiculoTr);

   form.reset();

});

