


function mostrarResult(operacao) {
    valor1 = document.getElementById("primeiroVl");
    valor2 = document.getElementById("segundoVl");
    resultado = document.getElementById("result");


    if (valor1.value == "") {
        alert("Valor 1 está em branco. Favor informá-lo!");
        valor1.focus();
    }
    else if (valor2.value == "") {
        alert("Valor 2 está em branco. Favor informá-lo!");
        valor2.focus();
    }
    else {
        switch (operacao) {
            case "+":
                resultado.value = ((parseFloat(valor1.value) + parseFloat(valor2.value))).toFixed(2);
                break;
            case "-":
                resultado.value = ((parseFloat(valor1.value) - parseFloat(valor2.value))).toFixed(2);
                break;
            case "*":
                resultado.value = ((parseFloat(valor1.value) * parseFloat(valor2.value))).toFixed(2);
                break;
            case "/":
                if (parseFloat(valor2.value) == 0) {
                    alert("Não é possível divisão por zero. Informe um novo valor!")
                    valor2.focus();
                }
                else {
                    resultado.value = (parseFloat(valor1.value) / parseFloat(valor2.value)).toFixed(2);
                }
                break;

        }

    }

}

