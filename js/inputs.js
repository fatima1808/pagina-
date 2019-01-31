var campoNum = ".numeric-only";
$(document).on("keydown", campoNum, function (e) {
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        (e.keyCode == 65 && (e.ctrlKey || e.metaKey)) ||
        (e.keyCode == 67 && (e.ctrlKey || e.metaKey)) ||
        (e.keyCode == 88 && (e.ctrlKey || e.metaKey)) ||
        (e.keyCode == 86 && (e.ctrlKey || e.metaKey)) ||
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});


    function soloLetras(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = " áéíóúûùòäÄëËïÏöÖüÜabcdefghijklmnñopqrstuvwxyz";
       especiales = "8-37-39-46";

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
    } 