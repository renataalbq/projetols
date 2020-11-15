//calculaHoras()

function calcHoras(placa,horaEntrada,minutoEntrada) {
    var horaEntrada = parseInt(horaEntrada);
    var minutoEntrada = parseInt(minutoEntrada);
    
    var date = new Date();
    var horaAtual = parseInt(date.getHours());
    var minAtual = parseInt(date.getMinutes());
    var qtdHoras = horaAtual - horaEntrada;
    var qtdMinutos = minAtual - minutoEntrada
    var total = `${qtdHoras}h:${qtdMinutos}m`
  
    return `O carro ficou estacionado ${total}`
  
}