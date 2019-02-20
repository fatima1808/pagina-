
$("body").ready(function (event) {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var tipo = url.searchParams.get("tipo");
	$("#opciones").val(tipo);
});

$("#btn-enviar").click(function (event) {
	var nombre = $("#nombre-contacto").val();
	var telefono = $("#telefono").val();
	var email = $("#correo-contacto").val();
	var tipo = $("#opciones").val();

	limpiarErrores("nombre-contacto");
	limpiarErrores("telefono");
	limpiarErrores("correo-contacto");
	limpiarErrores("opciones");

	if (isEmpty("nombre-contacto")) {
		return false;
	}

	if (isEmpty("telefono")) {
		return false;
	}

	if (isEmpty("correo-contacto")) {
		return false;
	}

	if (!isEmail("correo-contacto")) {
		return false;
	}

	if (isEmpty("opciones")) {
		return false;
	}



	var datos = {
		"nombre": nombre,
		"telefono": telefono,
		"email": email,
		"tipo": tipo,

	};

	$.ajax({
		url: "192.168.0.20/test.php",
		method: "POST",
		data: datos,
		success: function (response) {
			console.log(response.statusMessage);
			$("#modal-envio").modal("show");
		},
		error: function (err) {
			console.error(err);
			$("#modal-error").modal("show");
		}

	})

});

function isEmpty(id) {
	var dato = $("#" + id).val();
	if (dato === "") {
		$("#" + id).addClass("error-input");
		$("label[for='" + id + "']").html("<i class=\"fas fa-exclamation-triangle\"></i> &nbsp; El campo no puede estar vacio");
		return true;
	}

	return false;
}

function limpiarErrores(id) {
	$("#" + id).removeClass("error-input");
	$("label[for='" + id + "']").html("");
}


function isEmail(id) {
	var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	var dato = $("#" + id).val();
	if (!emailRegex.test(dato)) {
		$("#" + id).addClass("error-input");
		$("label[for='" + id + "']").html("<i class=\"fas fa-exclamation-triangle\"></i> &nbsp; Formato no válido");
		return false;
	}
	return true;
}


$('#modal-envio').on('shown.bs.modal', function () {
	setTimeout(function () {
		$('#modal-envio').modal("hide");
	}, 3480)

})

$('#modal-error').on('shown.bs.modal', function () {
	setTimeout(function () {
		$('#modal-error').modal("hide");
	}, 3480)

})



$("#map").click(function (event) {
	//redirecciona a maps
});



$("#map-trigger").hover(
	function (event) {
		$("#map").css({"background-image":"url(img/Mapa1920_1080Red.svg"});
	},

	function (event) {
		$("#map").css({"background-image":"url(img/Mapa1920_1080Hover.svg"});
	});









