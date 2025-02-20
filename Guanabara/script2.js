function verificar () {
   var data =  new Date()
   var ano = data.getFullYear
   var fano = document.getElementById('ano')
   var res = document.querySelector('div#res')
   if (fano.ariaValueMax.length === 0 || fano.value > ano) {
    alert("Invalid")
   } else {
        var fsex = document.getElementsByName("sex")
        var idade = ano - Number(fano.value)
        var genero = ""
        if (fsex [1] .checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                res.innerHTML = "Detectamos uma criança"
            } else if  (idade < 21) {
                res.innerHTML = "Detectamos um jovem adulto"
            }
            else if (idade < 50) {
                res.innerHTML = "Detectamos um adulto"
            } else {
                res.innerHTML = "Detectamos um idoso"
            }
        } else if (fsex [1] .checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                res.innerHTML = "Detectamos uma criança"
            } else if  (idade < 21) {
                res.innerHTML = "Detectamos uma jovem adulta"
            }
            else if (idade < 50) {
                res.innerHTML = "Detectamos uma adulta"
            } else {
                res.innerHTML = "Detectamos um idosa"
            }
        }
            res.style.textalign = "center"
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   }
}