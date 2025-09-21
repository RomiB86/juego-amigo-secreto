## Juego amigo secreto
Una aplicación web interactiva que permite organizar un sorteo de "Amigo Secreto" entre amigos. Los usuarios pueden ingresar nombres, visualizar la lista y realizar un sorteo aleatorio para elegir al amigo secreto.

## Instalación
1. Cloná el repositorio
2. Accedé a la carpeta del proyecto
3. Abrí el archivo index.html en tu navegador

## Tecnologías utilizadas
-HTML5
-CSS3
-JavaScript

## Cómo ejecutar el proyecto
Abrí index.html
Ingresá nombres en el campo de texto y hacé clic en "Añadir"
Una vez que tengas la lista completa, hacé clic en "Sortear amigo" para ver el resultado

## Dependencias
Este proyecto no utiliza frameworks ni librerías externas. Todo el código es nativo y funciona en cualquier navegador

## Estructura del proyecto
amigo-secreto/
├── index.html
├── style.css
├── app.js
├── assets/
│   └── amigo-secreto.png

## Posibles problemas y soluciones
No se muestra el resultado del sorteo: Verificá que el array de amigos no esté vacío antes de hacer clic en "Sortear amigo"
Los nombres no se agregan a la lista: Asegurate de que el campo de texto no esté vacío. El programa muestra una alerta si no se ingresa nada
No se ve la imagen: Confirmá que el archivo amigo-secreto.png esté dentro de la carpeta assets y que la ruta en el HTML sea correcta

## Autor
Desarrollado por Romi como parte del curso ONE
