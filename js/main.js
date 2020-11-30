var cadastrar = document.querySelector("#cadastrar");

// cadastrar.addEventListener("keydown", function(event) {
//    event.preventDefault();
// })

cadastrar.addEventListener("click", function(event) {
   event.preventDefault();

 
   var form = document.querySelector("#formulario");

   var modelo = form.modelo.value.trim().toUpperCase()
   var placa = form.placa.value.trim().toUpperCase()
   var horaEntrada = new Date();
   var hora = horaEntrada.getHours();
   var minutos = horaEntrada.getMinutes();

   var horaFormat = `${hora}:${minutos}`

   if (hora < 10 ) {
      var horaFormat = `0${hora}:${minutos}`
      if (minutos < 10){
         var horaFormat = `0${hora}:0${minutos}`
      }
   }
   if (minutos < 10 ) {
      var horaFormat = `${hora}:0${minutos}`
   }


   if (!modelo || !placa){
      alert("Preencha todos os campos!");
		return false;
   }


   let validaPlaca = new RegExp("^[a-zA-Z]{3}[0-9]{4}|[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$");
   if (validaPlaca.test(placa) === false){

      var placaClass = form.placa
      placaClass.classList.add("invalida")
      placaClass.value = 'Placa Inválida';

      var inputInvalidTimeOut;
      var inputInvalidValue;

      function invalid(){
         inputInvalidValue = setTimeout(wrongValue, 1500)
      }

      function wrongValue(){
         placaClass.value = '';
      }

      function timeOut() {
         inputInvalidTimeOut = setTimeout(wrongInput, 2000)
         return inputInvalidTimeOut
      }

      function wrongInput() {
         placaClass.classList.remove("invalida")
      }

      timeOut()
      invalid()
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

