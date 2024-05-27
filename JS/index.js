function confirmar() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;

	if (!nombre || !apellidos || !email || !passwd) {
		alert("Los campos son obligatorios");
	} else {
        alert("Registrado con éxito");
		document.getElementById("nombre").value = " ";
		document.getElementById("apellidos").value = " ";
		document.getElementById("email").value = " ";
		document.getElementById("passwd").value = " ";
	}
}