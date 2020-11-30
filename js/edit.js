function edit(){
    var modelo = document.getElementsByClassName('modeloBody')
    console.log(modelo)
    modelo.onclick = function(){
        var texto = this.nodeValue;
        var input = '<input type="text" name="1" value="'+texto+'">';
        this.innerHTML = input;
        var field = this;
        field.focus();
        field.select();
        field.onblur = function(){
            this.parentNode.innerHTML = this.value;
            edit();
        }
    }
}
 