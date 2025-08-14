let amigos = [];// Lista para almacenar los nombres de los amigos
let amigosMostrados = [];// Lista para almacenar los amigos que han sido sorteados
const MAX_AMIGOS = 100; // Definir el número máximo de amigos que se pueden agregar

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;

    // Validar que el nombre ingresado no esté vacío y contenga solo letras y espacios
    if(nuevoAmigo.trim () == "" || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nuevoAmigo)) {
        alert("Por favor, ingresa un nombre válido.");
    }
    else{
        if(amigos.includes(nuevoAmigo)) { // Verificar si el nombre ya está en la lista
            alert("El nombre ingresado ya está en la lista.");
            limpiarCaja();
            return;
        } 
        
        if(amigos.length >= MAX_AMIGOS) { // Verificar si se ha alcanzado el máximo de amigos
            alert(`No puedes agregar más de ${MAX_AMIGOS} amigos.`);
            limpiarCaja();
            return;
        }

        amigos.push(nuevoAmigo);
        agregarAmigoLista(amigos);
        limpiarCaja();

        if(amigos.length >= 2) { // Habilitar el botón de sorteo si hay al menos 2 amigos
            document.getElementById('botonSortear').disabled = false; // Habilitar el botón de sorteo
        }
    }
}

function agregarAmigoLista(listaNombres) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de agregar nuevos amigos
    
    for(let i = 0; i < listaNombres.length; i++) { // Recorrer la lista de amigos
        let li = document.createElement('li');
        li.textContent = listaNombres[i];// Crear un nuevo elemento de lista
        lista.appendChild(li);// Agregar cada amigo a la lista HTML
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random() * (amigos.length))];// Selecciona un amigo al azar

    // Verifica si ya se han sorteado todos los amigos
    if(amigos.length == amigosMostrados.length) {
        alert("Todos los amigos ya han sido sorteados.");
        return;
    }
    else {
        if (amigosMostrados.includes(amigoSorteado)) {      
            return sortearAmigo();// Si el amigo ya ha sido sorteado, vuelve a llamar a la función
        }
        else {
            amigosMostrados.push(amigoSorteado);// Agrega el amigo sorteado a la lista de amigos mostrados
        }

        let mostrarResultado = document.getElementById('resultado'); 
        mostrarResultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;// Muestra el resultado del sorteo
    }
}

// Limpiar la caja de texto después de agregar un amigo
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}