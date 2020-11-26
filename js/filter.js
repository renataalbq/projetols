var search = document.querySelector("#search-input");
var tabela = document.querySelector("#garagem");

search.addEventListener("input", function() {
    var veiculosTr = document.querySelectorAll(".veiculoTr");

    if (this.value.length > 0) {
        for (var i = 0; i < veiculosTr.length; i++) {
            var veiculo = veiculosTr[i];
            var tdPlaca = veiculo.querySelector(".placaBody");
            var placa = tdPlaca.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(placa)) {
                veiculo.classList.add("invisivel");
            } else {
                veiculo.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < veiculosTr.length; i++) {
            var veiculo = veiculosTr[i];
            veiculo.classList.remove("invisivel");
        }
    }
});

