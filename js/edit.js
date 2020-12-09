function edit(){
    var modelo = document.getElementById('idmodeloBody')
    var placa = document.getElementById('idplacaBody')
    var textoModelo = modelo.textContent;
    var textoPlaca = placa.textContent;
    var inputModelo = '<input type="text" id="newModelo" value="'+textoModelo+'">';
    var inputPlaca = '<input type="text" id="newPlaca" value="'+textoPlaca+'">';
    modelo.innerHTML = inputModelo;
    placa.innerHTML = inputPlaca;
    var campoModelo = modelo; 
    var campoPlaca = placa;
    campoModelo.focus(); campoPlaca.focus();
    campoModelo.onblur = function(){
        modelo.innerHTML = updateModelo.value;
    }   
    campoPlaca.onblur = function(){
        placa.innerHTML = updatePlaca.value;
    }

}
