const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    // ========================================
    // PEGANDO OS VALORES DOS CAMPOS
    // ========================================

    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();

    const senha = document.getElementById("senha").value.trim();


    // ========================================
    // PRIMEIRA VALIDAÇÃO:
    // VERIFICAR SE TODOS OS CAMPOS FORAM PREENCHIDOS
    // ========================================

    if (nome === "" || email === "" || senha === "") {

        alert("Todos os campos precisam ser preenchidos.");

        return;
    }


    // ========================================
    // VALIDAÇÃO DO NOME
    // ========================================

    if (nome.length < 3) {

        alert("Digite um nome válido.");

        return;
    }


    // ========================================
    // VALIDAÇÃO DO E-MAIL
    // ========================================

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {

        alert("Digite um e-mail válido.");

        return;
    }


    // ========================================
    // VALIDAÇÃO DA SENHA
    // ========================================

    /*
        A senha precisa ter:

        - Pelo menos 8 caracteres
        - Uma letra minúscula
        - Uma letra maiúscula
        - Um número
        - Um caractere especial
    */

    const regexSenha =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    if (!regexSenha.test(senha)) {

        alert(
            "A senha deve ter no mínimo 8 caracteres, " +
            "incluindo pelo menos uma letra maiúscula, " +
            "uma letra minúscula, um número e um caractere especial."
        );

        return;
    }


    // ========================================
    // TODOS OS DADOS ESTÃO CORRETOS
    // ========================================

    alert("Login realizado com sucesso!");

    window.location.href = "painel.html";

});
