var slogan = $("#slogan");
var soluciones = $("#soluciones");
var red = $(".letter-container, .point-container, #soluciones");
var tiempo = 4000;
var tiempoespera = 3000;
var tiempoanimacion = 6500;

 red.ready(function () {
 	window.setTimeout(function () {
 		red.addClass("hidding");
	}, tiempo);

 });

soluciones.ready(function () {
	window.setTimeout(function () {
		soluciones.addClass("showing");
	}, tiempoespera);
});

 slogan.ready(function () {
 	window.setTimeout(function () {
 		slogan.addClass("showing");
 	}, tiempo);
 });


$("body").ready(function () {
	window.setTimeout(function () {
		window.location.replace("../paginas/home.html");
	}, tiempoanimacion);
	window.setTimeout(function(){
		$("#particles-js, #slogan").addClass("hidding");
	},tiempoanimacion-1000);
});

