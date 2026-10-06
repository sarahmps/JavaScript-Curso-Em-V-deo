
function contador(){
    var ni = window.document.getElementById('txtIn')
    var nf = window.document.getElementById('txtFim')
    var passo = window.document.getElementById('txtP')
    var msg = window.document.getElementById('msg')
    if(ni.value.length == 0 || nf.value.length == 0 || passo.value.length ==0){
        msg.style.color = 'rgb(214, 0, 0)'
        msg.innerHTML = 'ERRO! Verifique os dados inseridos novamente!'
        msg.innerHTML += `\n Impossível contar!`
    }else{
        msg.style.color = 'rgb(0, 0, 0)'
        msg.innerHTML = `Contando: <br/>`
        var i = Number(ni.value)
        var f = Number(nf.value)
        var p = Number(passo.value)
        var seta = '➡️'
        var fim = '🐱‍🐉'
        if(i < f){
            // contagem crescente
            for(c = i ; c <= f ; c += p ){
                msg.innerHTML += ` ${c} ${seta}`
            }
        }else{
            // contagem decrescente
            for(c = i ; c >= f ; c -= p){
                msg.innerHTML += ` ${c} ${seta}`
            }
        }
        msg.innerHTML += `${fim}`
    }
    
    
}