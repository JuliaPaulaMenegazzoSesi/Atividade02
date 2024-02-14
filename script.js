var nomeGlobal;
var emailGlobal;
var cpfGlobal;
var msgGlobal;

function conferirMsgWpp() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var msg = document.getElementById("msg").value;

    nomeGlobal = nome;
    emailGlobal = email;
    cpfGlobal = cpf;
    msgGlobal = msg;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confEmail").textContent = email;
    document.getElementById("confCpf").textContent = cpf;
    document.getElementById("confMsg").textContent = msg;
}

function enviar() {
    var numTel = "5541992829521"

    var linkWpp = "https://wa.me/" + numTel + "?text=Nome: " + nomeGlobal + " - " + emailGlobal + " - " + cpfGlobal + " - " + msgGlobal;

    window.open(linkWpp, "_blank");
}
