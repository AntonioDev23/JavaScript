function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('ano').value.trim(); // Removendo espaços extras
    var res = document.querySelector('div#res');
 
    // Se o usuário digitou uma data completa, pegamos apenas o ano
    if (fano.includes("/")) {
        var partes = fano.split("/");
        fano = partes[2]; // Pegamos apenas o ano (2015 no caso de 02/02/2015)
    }
 
    if (fano.length == 0 || isNaN(fano) || Number(fano) > ano || Number(fano) < 1900) { 
        alert("Ano inválido! Digite apenas o ano corretamente.");
        return;
    }
 
    var idade = ano - Number(fano);
    var fsex = document.getElementsByName("sex");
    var genero = "";
 
    if (fsex[0].checked) {
        genero = "Homem";
    } else if (fsex[1].checked) {
        genero = "Mulher";
    } else {
        alert("Selecione um gênero!");
        return;
    }
 
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
 }
 
 