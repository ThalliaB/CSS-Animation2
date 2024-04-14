
const divResultado = document.getElementById("resultado");

function EnviarDados() {
    var Nome = document.getElementById("Nome").value.toLowerCase();
    var Idade = parseInt(document.getElementById("Idade").value);

    if (Nome == "vilmar" && Idade >= 23) {
        Parabens();
    } else if (Nome == "rozeli" || Nome == "roseli" && Idade >= 30) {
        divResultado.innerHTML = "Oi sogrinha!";
    } else if (Nome == "selmar" || Nome == "lilo" && Idade >= 30) {
        divResultado.innerHTML = "Oi sogro!";
    } else if (Nome == "rosangela" || Nome == "toco" && Idade >= 18) {
        divResultado.innerHTML = "Oi toco! hihi";
    } else if (Nome == "lucas" && Idade >= 18) {
        divResultado.innerHTML = "Oi" + " " + Nome;
    } else {
        divResultado.innerHTML = "Aconteceu algo de errado. Tente novamente.";

    }
}

function Parabens() {

    document.getElementById("main").style.display = "none";

    divResultado.innerHTML = `<h1>PARABÉNS</h1><br><h2 class="textoAnimado">Você é o amor da minha vida!</h2><br><button type="button" class="btn btn-dark" onclick="window.location.reload()">Voltar</button>`
}
