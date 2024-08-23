//Função de login

function validarLogin() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (login === "acesso" && senha === "acesso")
    {
        window.location.href = "navbar1.html";
    }
    else
    {
        showAlert("Login ou senha incorretos!")
        return false;
    }
}

document.getElementById("login-form").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        validarLogin();
    }
})

//Caixa de alerta customizada

function showAlert(message) {
    var alertContainer = document.getElementById('alerta-custom');
    var alertMessage = document.getElementById('alertMessage');
    
    alertMessage.textContent = message;
    alertContainer.style.display = 'flex'; 
}

document.getElementById('close-alert').addEventListener('click', function() {
    var alertContainer = document.getElementById('alerta-custom');
    alertContainer.style.display = 'none';
});

function fecharPopup () {
    var popupContainer = document.getElementById("popup-exp");
    popupContainer.style.display = "none";
}

