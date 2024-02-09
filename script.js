var nomeGlobal;
var msgGlobal;

function conferirMsgWpp() {
    var nome = document.getElementById("nome").value;
    var msg = document.getElementById("msg").value;

    nomeGlobal = nome;
    msgGlobal = msg;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = msg;
}

function enviar() {
    var numTel = "5541992829521"

    var linkWpp = "https://wa.me/" + numTel + "?text=Nome: " + nomeGlobal + " - " + msgGlobal;

    window.open(linkWpp, "_blank");
}
