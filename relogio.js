function carregar() {
    var horario = window.document.getElementById('horario');
    var img = window.document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    horario.innerHTML = `${hora} : ${minutos} : ${segundos}`
}