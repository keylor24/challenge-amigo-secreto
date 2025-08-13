let amigos = [];
let amigosMostrados = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;

    if(nuevoAmigo.trim () == "" || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nuevoAmigo)) {
        alert("Por favor, ingresa un nombre válido.");
    }
    else{
        amigos.push(nuevoAmigo);
        limpiarCaja();
        agregarAmigoLista(amigos);

        if(amigos.length >= 2) {
            document.getElementById('botonSortear').disabled = false; // Habilitar el botón de sorteo
        }
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

function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random() * (amigos.length))];

    if(amigos.length == amigosMostrados.length) {
        alert("Todos los amigos ya han sido sorteados.");
        return;
    }
    else {
        if (amigosMostrados.includes(amigoSorteado)) {
            return sortearAmigo();
        }
        else {
            amigosMostrados.push(amigoSorteado);
            console.log(amigosMostrados);
        }

        let mostrarResultado = document.getElementById('resultado');
        mostrarResultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}