// home.js
function irAFormulario(tipo) {
    if (tipo === 'paciente') {
        window.location.href = './formulario_paciente.html';
    } else if (tipo === 'cuidadora') {
        window.location.href = './formulario_cuidadora.html';
    }
}
