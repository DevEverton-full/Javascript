function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
       if(fsex[0].checked){
        gênero = 'Homem'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'Criança menino.jpg')
        } else if (idade < 21 ){
            //Jovem
            img.setAttribute('src', 'Jovem Homem.jpg')
        } else if (idade < 50){
            //Adulto
            img.setAttribute('src','Adulto Homem.jpg')
        } else {
            //Idoso
            img.setAttribute('src', 'Idoso.jpg')
        }
       } else if(fsex[1].checked){
        gênero = 'Mulher'
       }
       res.style.texAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}
