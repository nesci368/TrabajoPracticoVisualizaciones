function registrarCuidadora() {
    const nombre = document.getElementById('nombre-cuidadora').value;
    const correo = document.getElementById('correo-cuidadora').value;
    const contrasena = document.getElementById('contrasena-cuidadora').value;

    if (!nombre || !correo || !contrasena) {
        alert('Por favor, complete todos los campos.');
        return;
    }


    document.getElementById('mensaje-confirmacion-cuidadora').innerText = 'Registro exitoso como cuidadora. ¡Bienvenida!';
}
