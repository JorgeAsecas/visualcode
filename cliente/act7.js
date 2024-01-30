function submitt(e) {
    e.preventDefault()
    datos = new FormData(this)
    objetodatos = Object.fromEntries(datos.entries())
    document.querySelector('#maill').setAttribute('href', "mailto:Rafael.figueroa@iesdonana.org?subject=Formulario")
    document.querySelector('#maill').click()

}
