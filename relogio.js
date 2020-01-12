//Create on 12/01/2020
//By Lewis
//função para importar hora:minutos:segundos do sistema
function carregar() {
    var horario = window.document.getElementById('horario');
    var img = window.document.getElementById('fotos');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    horario.innerHTML = `${hora} : ${minutos} : ${segundos}`
    //condição par exibição das imagens
    if(hora >= 00 && hora < 06){
        //madrugada
        img.src = 'img/madrugada.jpg'

    }else if (hora >= 06 && hora < 12){
        //manhã
        img.src ='img/manhã.jpg'

    }else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'img/tarde.jpg'

    } else {
        //Boa noite
        img.src = 'img/noite.jpg'

    }
}