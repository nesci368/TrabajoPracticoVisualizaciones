const data = {
    argentina: {
        provincias: ["Buenos Aires", "Córdoba", "Mendoza"],
        ciudades: {
            "Buenos Aires": ["La Plata", "Rosario", "Mar del Plata"],
            "Córdoba": ["Córdoba", "Villa María", "Río Cuarto"],
            "Mendoza": ["Mendoza", "San Rafael", "Malargüe"]
        }
    },
    brasil: {
        provincias: ["Sao Paulo", "Río de Janeiro", "Bahía"],
        ciudades: {
            "Sao Paulo": ["Sao Paulo", "Campinas", "Guarulhos"],
            "Río de Janeiro": ["Río de Janeiro", "Niteroi", "Nova Iguaçu"],
            "Bahía": ["Salvador", "Feira de Santana", "Itabuna"]
        }
    }
};

function cargarProvincias() {
    const paisSeleccionado = document.getElementById("pais").value;
    const provinciasSelect = document.getElementById("provincia");
    const provincias = data[paisSeleccionado].provincias;

    provinciasSelect.innerHTML = "<option value=''>Selecciona una provincia</option>";

    provincias.forEach((provincia) => {
        const option = document.createElement("option");
        option.value = provincia;
        option.textContent = provincia;
        provinciasSelect.appendChild(option);
    }
    );
}

function cargarCiudades() {
    const provinciaSeleccionada = document.getElementById("provincia").value;
    const ciudadesSelect = document.getElementById("ciudad");
    const paisSeleccionado = document.getElementById("pais").value;
    const ciudades = data[paisSeleccionado].ciudades[provinciaSeleccionada];

    ciudadesSelect.innerHTML = "<option value=''>Selecciona una ciudad</option>";

    ciudades.forEach((ciudad) => {
        const option = document.createElement("option");
        option.value = ciudad;
        option.textContent = ciudad;
        ciudadesSelect.appendChild(option);
    });
}

document.getElementById("pais").addEventListener("change", cargarProvincias);
document.getElementById("provincia").addEventListener("change", cargarCiudades);
