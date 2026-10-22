var atual = new Date()
var hora = atual.getHours()
var minuto = atual.getMinutes()
console.log(`Agora são exatamente ${hora} horas ${minuto} minutos`)
if (hora < 12){
    console.log('Bom dia!')
}else if(hora > 12 && hora < 17){
    console.log('Boa tarde!')
}else if(hora > 17){
    console.log('Boa Noite!')
}