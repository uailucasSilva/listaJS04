function validar() {

    //atribuindo todo o elemento a uma variavel
    login = document.getElementById("txtLogin");
    senha = document.getElementById("txtSenha");// <-atribuindo o elemento todo a variavel
    confSenha = document.getElementById("txtConfSenha");

    if (login.value == "") {
        alert("O campo Login está em branco. Favor informá-lo!");
        login.focus();
    }
    else {
        if (senha.value == "") {//especificando qual campo do elemento que deve ser validado
            alert("Senha está em branco. Favor informá-la!");
            senha.focus();//especificando o elemento que deve receber foco
        }
        else if (confSenha.value == "") {
            alert("Confimar senha está em branco. Favor informá-la!");
            confSenha.focus();
        }
        else if (senha.value != confSenha.value) {
            alert("As senhas não conferem!");
            senha.value = "";
            confSenha.value = "";
            senha.focus();
        }
        else {
            alert("Logado senha iguais!");
        }
    }
}