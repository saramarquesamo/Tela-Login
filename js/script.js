function ValidarFormulario(){
    var username = document.getElementById("username")
    var password = document.getElementById("password")

    console.log(username.value+password.value)

    if (username.value =="admin@admin.com" && password.value =="admin")
    {
        localStorage.setItem("acesso", true)
        alert("usuário autenticado!")

        window.location.href = "index.html"

    } else {
        alert ("Usuário ou senha inválidos!")
    }
}