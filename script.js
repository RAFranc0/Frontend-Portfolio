//Função de login
function validarLogin() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (login === "admin" && senha === "admin")
    {
        alert("Funcionou");
        window.location.href = "index.html";
    }
    else
    {
        alert("Login ou senha incorretos!")
        return false;
    }
}

document.getElementById("login-form").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        validarLogin();
    }
})
