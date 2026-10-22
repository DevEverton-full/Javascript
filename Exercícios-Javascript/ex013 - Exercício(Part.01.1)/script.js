function carregar() {

    var msg = window.document.getElementById('msg')
     var img = window.document.getElementById('imagem')
     var data = new Date()
     var hora = data.getHours()
    //var hora = 9 /*Essa variável eu posso usar para manipular a hora.*/
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = "Manhã.png.png"
        document.body.style.background = "#d0a639"
    } else if (hora >= 12 && hora <18) {
        // Boa Tarde!
        img.src = 'Tarde.png.png'
        document.body.style.background ='#e7782a'
    } else {
        //Boa noite!
        img.src = 'Noite.png.png' 
        document.body.style.background ='#1b3045'
    }
     

}