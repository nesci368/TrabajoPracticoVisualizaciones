function validarSeleccionTipoDeTarjeta() {
    var radios = document.getElementsByName("tipoTarjeta");
    var seleccionado = false;
    
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            seleccionado = true;
            break;
        }
    }
    
    if (!seleccionado) {
        alert("Por favor, selecciona el tipo de tarjeta (crédito o débito).");
        return false;
    }
    
    return true;
}

function validarTitularTarjeta() {
    var titularTarjeta = document.getElementById("titularDeLaTarjeta").value;
    var regex = /^[a-zA-Z\s]+$/;
    
    if (!regex.test(titularTarjeta)) {
        alert("El nombre en la tarjeta no puede contener números ni caracteres especiales.");
        return false;
    }
    
    return true;
}

function validarNumeroTarjeta() {
    var numeroTarjeta = document.getElementById("numeroTarjeta").value;
    var regex = /^[0-9]{16}$/;
    
    if (!regex.test(numeroTarjeta)) {
        alert("El número de tarjeta debe tener exactamente 16 dígitos.");
        return false;
    }
    
    return true;
}

document.getElementById("fechaExpiracion").addEventListener("input", function() {
    var inputValue = this.value;

    if (/^\d{2}$/.test(inputValue)) {
        this.value = inputValue + '/';
    } else if (/^\d{2}\/\d{2}$/.test(inputValue) && inputValue.charAt(2) !== '/') {
        this.value = inputValue.substring(0, 2) + '/' + inputValue.substring(2);
    }
});
function validarFechaVencimiento() {
    var fechaExpiracion = document.getElementById("fechaExpiracion").value;
    var regex = /^\d{2}\/\d{2}$/;

    if (!regex.test(fechaExpiracion)) {
        alert("La fecha de expiración debe estar en formato MM/YY.");
        return false;
    }

    return true;
}

function validarCVV() {
    var cvv = document.getElementById("cvv").value;
    var regex = /^\d{3}$/;
    
    if (!regex.test(cvv)) {
        alert("El CVV debe contener exactamente 3 números.");
        return false;
    }
    
    return true;
}