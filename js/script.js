function Randomizer() {
    var contador = 0;
    const liInput = document.getElementById("li").value;
    const lsInput = document.getElementById("ls").value;
    var li = parseInt(liInput);
    var ls = parseInt(lsInput);

    //Los valores de li y ls se obtienen y se convierten en enteros usando parseInt.
    //Se usa alert para mostrar los mensajes de forma más adecuada.
    //isNaN se usa para verificar si las entradas del usuario (o los valores obtenidos de los inputs) son números válidos.
    
    if (isNaN(li) || isNaN(ls)) {
        alert("Por favor ingrese números válidos en los campos de límite.");
        return;
    }

    var numer = Math.floor(Math.random() * (ls - li + 1)) + li;
    var c = 0;
    var conf = false;

    do {
        var num = prompt("Digite un número.");
        num = parseInt(num);
        c += 1;

        if (isNaN(num)) {
            alert("Por favor ingrese un número válido.");
        } else if (num < li || num > ls) {
            alert("Número fuera de rango.");
        } else if (num != numer) {
            alert("Inténtalo de nuevo.");
        } else {
            alert("¡Felicidades! Lo lograste en " + c + " intentos.");
            conf = true;
        }
    } while (!conf);
}
