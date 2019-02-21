var slogan = $("#slogan");
var red = $(".letter-container, .point-container");
var tiempo = 2500;
var tiempoanimacion = 3800;

red.ready(function(){
	window.setTimeout(function(){
		red.addClass("hidding");
	},tiempo);

});


<<<<<<< Updated upstream
slogan.ready(function(){
	window.setTimeout(function(){
		slogan.addClass("showing");
	},tiempo);
=======
$("body").ready(function () {
	window.setTimeout(function () {
		window.location.replace("./home.html");
	}, tiempoanimacion);
>>>>>>> Stashed changes
});

$("body").ready(function(){
	window.setTimeout(function(){
		window.location.replace("./home.html");
	},tiempoanimacion);
});