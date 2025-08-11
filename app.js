let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;

    if(nuevoAmigo.trim() == "") {
        alert("Por favor, ingresa un nombre válido.");
    }
    else{
        amigos.push(nuevoAmigo);
        limpiarCaja();
        agregarAmigoLista(amigos);
    }
}

function agregarAmigoLista(listaNombres) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de agregar nuevos amigos
    
    for(let i = 0; i < listaNombres.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaNombres[i];
        lista.appendChild(li);
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}