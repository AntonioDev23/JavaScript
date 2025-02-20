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
        
   }
}