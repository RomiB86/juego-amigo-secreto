// Array para almacenar los nombres
let amigos = [];

//asignar texto a un elemento
function asignarTextoElemento(selector, texto) {
  let elemento = document.querySelector(selector);
  elemento.innerHTML = texto;
}
//agregar un amigo
function agregarAmigo() {
  let campoNombre = document.getElementById('amigo');
  let nombre = campoNombre.value.trim();

  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  amigos.push(nombre);
  limpiarCampo();
  mostrarLista();
}
// Función para limpiar el campo de entrada
function limpiarCampo() {
  document.querySelector('#amigo').value = '';
}

// Función para mostrar la lista de amigos
function mostrarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos en la lista para sortear.');
    return;
  }
  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indice];

 let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;}
