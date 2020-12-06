function edit() {
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours();
    var minutos = horaEntrada.getMinutes();

    var tr = document.getElementById('veiculoTr')
    texto = this.nodeValue
    tr.innerHTML = '';
    tr.innerHTML += '<td>  <div class="form-group"> <input class=""autocomplete="off" type="text" id="Editmodelo" placeholder="Editar modelo" value"'+texto+'"></div></td>' + 
    '<td>  <div class="form-group"> <input class="autocomplete="off" type="text" id="Editplaca" placeholder="Editar placa" value"'+texto+'"></div></td>' +
    '<td>' +hora+':'+minutos+ ' </td>' +
    '<td> <button onclick="edit()" id="edit-button" class="btn"><img id="table-btn" src="images/edit_white.png"></button> </td>' +
    ' <td> <button onclick="check()" id="clear-button" class="btn btn-danger"><img id="table-btn" src="images/clear_white.png"></button> </td>'
}

function update() {
    var modelo = document.getElementById('idmodeloBody').value
    var placa = document.getElementById('idplacaBody').value
    var updateModelo = document.getElementById('Editmodelo').value;
    var updatePlaca = document.getElementById('Editplaca').value;
    

    modelo = updateModelo;
    placa = updatePlaca;
    
}