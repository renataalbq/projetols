function edit() {
    var modelo = document.getElementById('idmodeloBody')
    var placa = document.getElementById('idplacaBody')
    newModelo = modelo.nodeValue
    newPlaca = placa.nodeValue
    modelo.innerHTML = ''; placa.innerHTML = '';
    modelo.innerHTML += '<td><input type="text" id="Editmodelo" placeholder="Editar modelo" value"'+newModelo+'"></td>';
    placa.innerHTML += '<td> <input type="text" id="Editplaca" placeholder="Editar placa" value"'+newPlaca+'"></td>';
    
}

function update() {
    var modelo = document.getElementById('idmodeloBody')
    var placa = document.getElementById('idplacaBody')
    var updateModelo = document.getElementById('Editmodelo').value;
    var updatePlaca = document.getElementById('Editplaca').value;
    
    modelo = updateModelo;
    placa = updatePlaca;
    
}