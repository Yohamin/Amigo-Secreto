// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li><strong>Amigo Sorteado: ${amigoSorteado}</strong></li>`;
}
