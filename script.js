const inputs = document.querySelectorAll(".input-field");
inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.classList.add("active");
    });

    input.addEventListener("blur", () => {
        if (input.value === "") {
            input.classList.remove("active");
        }
    });
});


document.getElementById("submit").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
        alert(`Formulário preenchido com sucesso!\n\nNome: ${name}\nEmail: ${email}\nSenha: ${password}`);
    } else {
        alert("Preencha todos os campos obrigatórios.");
    }
});

