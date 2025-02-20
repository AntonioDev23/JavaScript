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
            
        } else if (fsex [1] .checked) {
            genero = "Mulher"
            
        }
            res.style.textalign = "center"
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   }
}