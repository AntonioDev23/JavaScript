function verificar () {
   var data =  new Date()
   var ano = data.getFullYear
   var fano = document.getElementById('ano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
    alert("Invalid")
   } else {
        var fsex = document.getElementsByName("sex")
        var idade = ano - Number(fano.value)
        var genero = ""
        if (fsex [0] .checked) {
            genero = "Homem"
            if (idade >=0 && idade < 10) {
                //criança
            } else if ( idade < 21) {
                //adolescente
            } 
            else if (idade < 60) {
                //adulto
            } else {
                //idoso
            }
        } else if (fsex [1] .checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //adolescente
            } 
            else if (idade < 60) {
                //adulto
            } else {
                //idoso
            }
            
        }
            res.style.textalign = "center"
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   }
} 