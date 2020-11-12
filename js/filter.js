var search = document.querySelector("#search-input");

search.addEventListener("input", function() {
    var veiculos = document.querySelectorAll("#garagem");
    var form = document.querySelector("#formulario");
    var placaBody = form.placa.value;

    if (this.value.length > 0) {
        for (var i = 0; i < veiculos.length; i++) {
            var veiculos = veiculos[i];
            var placaTd = placaBody;
            var placa = placaTd.textContent;
            var exp = new RegExp(this.value, "i");

            if (!exp.test(placa)) {
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