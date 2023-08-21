function resul (){
    var numeroo = document.getElementById('nul1')
    var numero = document.getElementById('nul2')
    var numero1 = Number (numeroo.value)
    var numero2 = Number (numero.value)
    var res = document.getElementById('res')
    var res2 = ``
    
    if(numero1 == 0 || numero2 == 0 ){
        window.alert('Impossivel calcular, preencha os 2 campos! ')
    }else{
        res2 = numero1 * numero2
        res.innerHTML = `Resultado de ${numero1} x ${numero2} e = ${res2}`
    
    }
        

}
