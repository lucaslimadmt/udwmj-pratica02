const nome = prompt("Por favor, digite o seu nome:");

const elementosaudacao = document.getElementById("saudacao");

if (nome && nome.trim() !== "") {
    elementosaudacao.textContent = `Olá, ${nome.trim()}!`;
} else {
    elementosaudacao.textContent = "Olá, visitante!";
}