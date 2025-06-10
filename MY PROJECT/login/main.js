function enviarWhatsapp(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const telefone = '5521992654107'

    const texto = `Olá, me chamo ${name}, ${message}`
    const msgFormatada = encodeURIComponent(texto)
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')
}