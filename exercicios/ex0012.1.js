var idade = 19
if (idade <16) {
    console.log('não vota')
}else {
    if (idade >= 16 && idade < 18) {
         //não precisa do &&, se a idade não for menor que 16 e for menor que 18 já indica a idade de voto opcional.
        console.log('voto opcional')
    }else if (idade >= 18){
        console.log('voto obrigatório')
    }
}