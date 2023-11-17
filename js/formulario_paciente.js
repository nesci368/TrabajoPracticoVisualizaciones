function consultarCuidadoras() {
    const nombrePaciente = document.getElementById('nombre-paciente').value;
    const edadPaciente = document.getElementById('edad-paciente').value;
    const necesidadesPaciente = document.getElementById('necesidades-paciente').value;

    if (!nombrePaciente || !edadPaciente || !necesidadesPaciente) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const cuidadorasRecomendadas = ['Cuidadora 1', 'Cuidadora 2', 'Cuidadora 3'];

    document.getElementById('mensaje-confirmacion-paciente').innerText = 'Consulta realizada con éxito. Cuidadoras recomendadas: ' + cuidadorasRecomendadas.join(', ');
    window.location.href = './cuidadoras_disponibles.html';
}
