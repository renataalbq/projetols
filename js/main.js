var cadastrar = document.querySelector("#cadastrar");

cadastrar.addEventListener("click", function(event) {
   event.preventDefault();

   var form = document.querySelector("#formulario");

   var modelo = form.modelo.value;
   var placa = form.placa.value;
   var horaEntrada = new Date();

   var veiculoTr = document.createElement("tr");

   var modeloTd = document.createElement("td");
   var placaTd = document.createElement("td");
   var horaTd = document.createElement("td")
   var finalizarTd = document.createElement("td")
   var excluirTd = document.createElement("td")

   modeloTd.textContent = modelo;
   placaTd.textContent = placa;

   veiculoTr.appendChild(modeloTd);
   veiculoTr.appendChild(placaTd);
   veiculoTr.appendChild(horaTd)
   veiculoTr.appendChild(finalizarTd);
   veiculoTr.appendChild(excluirTd)


   var tabela = document.querySelector("#garagem");

   tabela.appendChild(veiculoTr);
});
