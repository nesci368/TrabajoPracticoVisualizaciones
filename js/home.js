// home.js
function irAFormulario(tipo) {
    if (tipo === 'paciente') {
        window.location.href = './formulario_paciente.html';
    } else if (tipo === 'cuidadora') {
        window.location.href = './formulario_cuidadora.html';
    }
}

let menuBoton = document.querySelector(".menu-boton");
let menu = document.querySelector("#menu");

menuBoton.addEventListener("click", function(e){
    e.stopPropagation();
    menu.classList.remove("menuOcul");
    menu.classList.add("menuVis");
});

document.addEventListener("click", function(e){
    if(menu.classList.contains("menuVis")){
        if(!menu.contains(e.target) && e.target !== menuBoton){
            menu.classList.remove("menuVis");
            menu.classList.add("menuOcul");
        }
}
});




