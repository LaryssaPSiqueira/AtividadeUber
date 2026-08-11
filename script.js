
const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();


    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    // Validação de nome completo (pelo menos duas palavras)
    if (nome === "" || nome.split(/\s+/).length < 2) {
        alert("Digite seu nome completo (Nome e Sobrenome).");
        return;
    }

    // Validação de formato de e-mail
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        alert("Insira um e-mail válido.");
        return;
    }

    // Validação de tamanho mínimo da senha
    if (senha.length < 6) {
        alert("A senha deve possuir pelo menos 6 caracteres.");
        return;
    }

    // Se passar em todas as validações:
    alert("Login realizado com sucesso!");
    window.location.href = "painel.html";
});
