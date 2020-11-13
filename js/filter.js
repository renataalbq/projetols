var search = document.querySelector("#search-input");
var tabela = document.querySelector("#garagem");


search.onkeyup = function(){
    var filtro = search.value;
    for (var i = 0; i < tabela.rows.length; i++){
        var placa = tabela.rows[i].cells[1].innerText;
        console.log(placa)
        var corresponde = placa.toUpperCase().indexOf(filtro) >= 0;
        tabela.rows[i].style.display = corresponde ? '' : 'none';
    }
}   

  

