let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;

    if(nuevoAmigo.trim() == "") {
        alert("Por favor, ingresa un nombre válido.");
    }
    else{
        amigos.push(nuevoAmigo);
    }
}


