function RegisterClick() {
    var BtnRegister = document.getElementById('BtnRegister');
    BtnRegister = location.href = "register.html"
}

function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert('Sucesso');
        location.href = "MEI/ferramentas.html";
    } else {
        alert('Usuario ou senha incorretos');
    }

}

var button = document.getElementById('perfil');

button.addEventListener("click", function () {

    var info = document.getElementById('logout');

    if (info.style.display === "block") {
        info.style.display = "none"
    }
    else {
        info.style.display = "block"
    }
})

function Alerta(){
    alert("Desculpe! Está parte ainda em produção!")
}