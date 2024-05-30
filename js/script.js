function Randomizer() {
    var contador = 0;
    const liInput = document.getElementById("li");
    const lsInput = document.getElementById("ls");
    var numer = Math.floor(Math.random() * (ls - li)) + li;
    var c = 0
    do {
        var num = prompt("Digite un número");
        if(num!=numer){
            prompt("Intentalo de nuevo");
        }
        if(num<liInput || num>lsInput){
            prompt("Número fuera de rango");
        }
        c+=1;
    } while (num!=numer);
    message.textContent = "Felicidades! Lo lograste en ",c," intentos."
}
