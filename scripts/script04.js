function mostrarResult() {
    if ((parseFloat(document.getElementById("primeiraNt").value) + parseFloat(document.getElementById("segundaNt").value)) >= 60.0) {
        alert("Aprovado!");
    }
    else {
        alert("Reprovado!");
    }
}