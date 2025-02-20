function verificar() {
    var data = new Date();
    var ano = data.getFullYear(); // Correção aqui
    var fano = document.getElementById('ano');
    var res = document.querySelector('div#res');
 
    if (fano.value.length == 0 || Number(fano.value) > ano) { // Correção aqui
        alert("Ano inválido! Verifique os dados e tente novamente.");
    } else {
        var fsex = document.getElementsByName("sex");
        var idade = ano - Number(fano.value);
        var genero = "";
 
        if (fsex[0].checked) {
            genero = "Homem";
        } else if (fsex[1].checked) {
            genero = "Mulher";
        }
 
        res.style.textAlign = "center"; // Correção aqui
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    }
 }
 