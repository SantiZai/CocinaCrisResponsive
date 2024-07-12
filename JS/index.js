const form = document.querySelector("#form")

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const nombres = event.target.nombres.value
    const apellido = event.target.apellido.value
    const email = event.target.email.value
    const contraseña = event.target.contraseña.value

    const url = "http://localhost:8080/users"

    const userData = {
        username: `${nombres} ${apellido}`,
        email,
        password: contraseña
    }

    const response = await fetch(url, {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData)
    })

    if (response.ok) {
        console.log("Usuario creado con éxito")
    } else {
        console.log("Ha ocurrido un error al crear el usuario")
    }
})