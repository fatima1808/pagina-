$("body").ready(function(event){
	var url_string =  window.location.href;
	var url = new URL(url_string);
	var tipo = url.searchParams.get("tipo");
	$("#opciones").val(tipo);
});
$("#btn-enviar").click(function(event){
	$.ajax({
		url:"192.168.0.20/test.php", 
		method:"POST", 
		data:  {
		    "email": $("#correo-contacto").val(),
		    "subject": "contacto redpoint",
		    "bodyHtml": "<h1>Hola mundo</h1>",
		    "bodyTxt": "Hola mundo"
		},
		success:function(response){
			console.log(response.statusMessage);
		} ,
		error:function(err){
			console.error(err);
		}
	})
});