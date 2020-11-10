var search = document.querySelector("#search-input");

search.addEventListener("input", function() {
    var veiculos = document.querySelectorAll("#garagem");

    if (this.value.length > 0) {
        for (var i = 0; i < veiculos.length; i++) {
            var veiculos = veiculos[i];
            var placaTd = veiculos.querySelector("#placaBody");
            var placa = placaTd.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(placa)) {
                veiculos.classList.add("invisivel");
            } else {
                veiculos.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < veiculos.length; i++) {
            var veiculos = veiculos[i];
            veiculos.classList.remove("invisivel");
        }
    }
});