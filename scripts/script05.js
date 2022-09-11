function mostrarResult() {
    if ((parseFloat(document.getElementById("primeiraNt").value) + parseFloat(document.getElementById("segundaNt").value)) >= 60.0) {
        alert(`Aprovado! Sua nota foi de ${(parseFloat(document.getElementById("primeiraNt").value) + parseFloat(document.getElementById("segundaNt").value))} ponto(s).`);
    }
    else {
        alert(`Reprovado! Faltou(ram) ${60 - (parseFloat(document.getElementById("primeiraNt").value) + parseFloat(document.getElementById("segundaNt").value))} ponto(s) para você ser aprovado.`);

    }
}