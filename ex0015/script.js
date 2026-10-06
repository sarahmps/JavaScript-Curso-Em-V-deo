function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade <= 2){
                //bebê
                img.setAttribute('src', 'gato bebe.png')
            }else if (idade >2 && idade <= 10 ){
                //criança
                img.setAttribute('src', 'gato criança.png')
            }else if (idade > 10 && idade < 18){
                //adolescente
                img.setAttribute('src', 'gato adolescente.png')
            }else if (idade >= 18 && idade < 25){
                //jovem
                img.setAttribute('src', 'gato jovem.png')
            }else if (idade > 25 && idade < 60){
                //adulto
                img.setAttribute('src', 'gato adulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'gato velho.png')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 2){
                //bebê
                img.setAttribute('src', 'gato bebe fem.jpg')
            }else if (idade >2 && idade <= 10 ){
                //criança
                img.setAttribute('src', 'gato criança fem.jpg')
            }else if (idade > 10 && idade < 18){
                //adolescente
                img.setAttribute('src', 'gato adolescente fem.jpg')
            }else if (idade >= 18 && idade < 25){
                //jovem
                img.setAttribute('src', 'gato jovem fem.jpg')
            }else if (idade > 25 && idade < 50){
                //adulto
                img.setAttribute('src', 'gato adulto fem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'gato velho fem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
    
}