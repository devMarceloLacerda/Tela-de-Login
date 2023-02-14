const submitButton = document.getElementById("submit-button");
const username = document.getElementById("username");
const password = document.getElementById("password");

submitButton.addEventListener("click", function() {
  if (username.value === "" || password.value === "") {
    alert("Por favor, insira um nome de usuário e senha válidos.");
  } else {
    alert(`Bem-vindo, ${username.value}`);
  }
});
