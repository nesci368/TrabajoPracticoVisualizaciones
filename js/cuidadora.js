const cuidadoras = [
    {
        nombre: "María González",
        especialidad: "Cuidado de personas mayores",
        imagen: "./IMG/cuidador1",
        presentacion: "Hola, soy María. Tengo amplia experiencia en el cuidado de personas mayores. Me apasiona proporcionar un entorno seguro y confortable para mis pacientes.",
        precio: 3500,
        provincia: "Buenos Aires",
        ciudad: "La Plata"
    },
    {
        nombre: "Laura Rodríguez",
        especialidad: "Cuidado infantil",
        imagen: "./IMG/cuidador1",
        presentacion: "¡Hola! Soy Laura, una cuidadora con experiencia en el cuidado de niños. Disfruto creando un ambiente divertido y educativo para los más pequeños.",
        precio: 3000,
        provincia: "Córdoba",
        ciudad: "Córdoba"
    },
    {
        nombre: "Carlos Pérez",
        especialidad: "Cuidado postoperatorio",
        imagen: "./IMG/cuidador1",
        presentacion: "Saludos, soy Carlos. Mi experiencia en cuidados postoperatorios me ha permitido ayudar a personas a recuperarse con éxito después de procedimientos médicos.",
        precio: 4000,
        provincia: "Buenos Aires",
        ciudad: "Mar del Plata"
    },
    {
        nombre: "Ana Martínez",
        especialidad: "Cuidado de personas con discapacidad",
        imagen: "./IMG/cuidador1",
        presentacion: "Hola, me llamo Ana. Tengo experiencia en el cuidado de personas con discapacidad y me esfuerzo por crear un entorno inclusivo y de apoyo.",
        precio: 3800,
        provincia: "Córdoba",
        ciudad: "Villa María"
    },
    {
        nombre: "Javier Sánchez",
        especialidad: "Cuidado de enfermos crónicos",
        imagen: "./IMG/cuidador1",
        presentacion: "Soy Javier, con experiencia en el cuidado de pacientes con enfermedades crónicas. Mi objetivo es mejorar la calidad de vida de mis pacientes.",
        precio: 4200,
        provincia: "Buenos Aires",
        ciudad: "Bahía Blanca"
    },
    {
        nombre: "Sofía López",
        especialidad: "Cuidado de personas con Alzheimer",
        imagen: "./IMG/cuidador1",
        presentacion: "Hola, mi nombre es Sofía. Tengo experiencia especializada en el cuidado de personas con Alzheimer. Mi enfoque es brindar comprensión y apoyo.",
        precio: 3800,
        provincia: "Córdoba",
        ciudad: "Río Cuarto"
    }
];

const ciudadesPorProvincia = {
    "Buenos Aires": ["La Plata", "Mar del Plata", "Bahía Blanca"],
    "Catamarca": ["San Fernando del Valle de Catamarca", "Valle Viejo", "Fray Mamerto Esquiú"],
    "Chaco": ["Resistencia", "Barranqueras", "Fontana"],
    "Chubut": ["Rawson", "Trelew", "Comodoro Rivadavia"],
    "Córdoba": ["Córdoba", "Villa María", "Río Cuarto"],
    "Corrientes": ["Corrientes", "Goya", "Mercedes"],
    "Entre Ríos": ["Paraná", "Concordia", "Gualeguaychú"],
    "Formosa": ["Formosa", "Clorinda", "Pirané"],
    "Jujuy": ["San Salvador de Jujuy", "Palpalá", "Perico"],
    "La Pampa": ["Santa Rosa", "General Pico", "Toay"],
    "La Rioja": ["La Rioja", "Chilecito", "Aimogasta"],
    "Mendoza": ["Mendoza", "San Rafael", "Godoy Cruz"],
    "Misiones": ["Posadas", "Eldorado", "Oberá"],
    "Neuquén": ["Neuquén", "Cutral Có", "Plottier"],
    "Río Negro": ["Viedma", "General Roca", "Cipolletti"],
    "Salta": ["Salta", "San Ramón de la Nueva Orán", "Tartagal"],
    "San Juan": ["San Juan", "Rawson", "Chimbas"],
    "San Luis": ["San Luis", "Villa Mercedes", "La Toma"],
    "Santa Cruz": ["Río Gallegos", "Caleta Olivia", "Puerto Deseado"],
    "Santa Fe": ["Santa Fe", "Rosario", "Venado Tuerto"],
    "Santiago del Estero": ["Santiago del Estero", "La Banda", "Termas de Río Hondo"],
    "Tierra del Fuego": ["Ushuaia", "Río Grande", "Tolhuin"],
    "Tucumán": ["San Miguel de Tucumán", "Yerba Buena", "Banda del Río Salí"]
};

document.addEventListener("DOMContentLoaded", function() {
    cargarCiudades();
    mostrarResultados(cuidadoras);
});

function cargarCiudades() {
    const provinciaSeleccionada = document.getElementById("filtroProvincia").value;
    const selectCiudad = document.getElementById("filtroCiudad");
    selectCiudad.innerHTML = "<option value=''>Selecciona una ciudad</option>";

    if (provinciaSeleccionada && ciudadesPorProvincia[provinciaSeleccionada]) {
        ciudadesPorProvincia[provinciaSeleccionada].forEach(ciudad => {
            const option = document.createElement("option");
            option.value = ciudad;
            option.textContent = ciudad;
            selectCiudad.appendChild(option);
        });
    }
}

function aplicarFiltros() {
    const provinciaSeleccionada = document.getElementById("filtroProvincia").value;
    const ciudadSeleccionada = document.getElementById("filtroCiudad").value;
    const precioMaximo = document.getElementById("filtroPrecio").value;
    const patologia = document.getElementById("filtroPatologia").value.toLowerCase();

    const resultadosFiltrados = cuidadoras.filter(cuidadora => {
        return (
            (provinciaSeleccionada === "" || cuidadora.provincia.toLowerCase() === provinciaSeleccionada.toLowerCase()) &&
            (ciudadSeleccionada === "" || cuidadora.ciudad.toLowerCase() === ciudadSeleccionada.toLowerCase()) &&
            (precioMaximo === "" || cuidadora.precio <= parseFloat(precioMaximo)) &&
            (patologia === "" || cuidadora.especialidad.toLowerCase().includes(patologia))
        );
    });

    mostrarResultados(resultadosFiltrados);
}

function mostrarResultados(resultados) {
    const contenedorResultados = document.getElementById("resultadosCuidadoras");
    contenedorResultados.innerHTML = "";

    if (resultados.length === 0) {
        contenedorResultados.innerHTML = "<p>No se encontraron resultados.</p>";
    } else {
        resultados.forEach(cuidadora => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta-cuidadora");
            tarjeta.innerHTML = `
                <img src="${"./IMG/cuidador1.jpg"}" alt="Imagen de ${cuidadora.nombre}">
                <h2>${cuidadora.nombre}</h2>
                <p>Especialidad: ${cuidadora.especialidad}</p>
                <p>Ciudad: ${cuidadora.ciudad}</p>
                <p>${cuidadora.presentacion}</p>
                <p>Precio: $${cuidadora.precio} pesos</p>
                <div class="botones">
                    <button class="boton">Seleccionar</button>
                    <button class="boton"><a href="./perfil_cuidador.html">Ver Más</button>
                </div>
            `;
            contenedorResultados.appendChild(tarjeta);
        });
    }
}

function borrarFiltros() {
    document.getElementById("filtroProvincia").value = "";
    document.getElementById("filtroCiudad").value = "";
    document.getElementById("filtroPrecio").value = "";
    document.getElementById("filtroPatologia").value = "";
    cargarCiudades(); // Cargar ciudades por defecto
    mostrarResultados(cuidadoras); // Mostrar todas las cuidadoras
}