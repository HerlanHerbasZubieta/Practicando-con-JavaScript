# Practicando Javascript
Este repositorio es un espacio para practicar el lenguaje de programación JavaScript. Aquí podrás encontrar ejercicios, ejemplos y proyectos para ayudarte a mejorar tus habilidades.

**Requisitos previos**

Es recomendable tener conocimientos básicos de JavaScript. Esto incluye:

* Tipos de datos
* Variables
* Operadores
* Condiciones
* Bucles
* Funciones

**Estructura del repositorio**

El repositorio está organizado en las siguientes carpetas:

* **Ejercicios:** Esta carpeta contiene ejercicios de diferentes niveles de dificultad para practicar los conceptos básicos de JavaScript.
* **Ejemplos:** Esta carpeta contiene ejemplos de código para ilustrar diferentes conceptos y técnicas de JavaScript. 
[![Captura-de-pantalla-2024-05-07-115514.png](https://i.postimg.cc/g0vKZVMb/Captura-de-pantalla-2024-05-07-115514.png)](https://postimg.cc/d7VdMyP5)
* **Buscador de películas** Este proyecto consiste en un buscador de películas que utiliza la API de **[The Movie Database (TMDB)](https://developer.themoviedb.org/reference/intro/getting-started)** para obtener información sobre películas y mostrarlas al usuario.
El usuario puede buscar películas por el título de la película. Muestra información como ser.

**Tecnologías utilizadas:**

-   JavaScript
-   HTML
-   CSS
-   API de TMDB

**Cómo utilizar:**

1.  Clona el repositorio en tu ordenador.
2.  Accede a la página [TMDB](https://developer.themoviedb.org/reference/intro/getting-started) para crearte una cuenta y en el script.js cambia la  `API_KEY` por la que se generó en tu cuenta.
3.  Abre el archivo index.html en un navegador web.
4.  Introduce un nombre de película en la barra de búsqueda y pulsa "Buscar".
### 💻 Escritorio
[![Captura-de-pantalla-2024-05-07-121050.png](https://i.postimg.cc/65gSVhh8/Captura-de-pantalla-2024-05-07-121050.png)](https://postimg.cc/6yVYtngK)
  
* **Calculadora** Esta calculadora básica permite al usuario realizar operaciones matemáticas básicas como suma, resta, multiplicación y división.

**Características:**

-   Realiza operaciones matemáticas básicas (+, -, *, /)
-   Permite borrar cada número ingresado
-   Función para borrar toda la operación

**Tecnologías utilizadas:**

-   HTML: Para la estructura básica de la calculadora.
-   CSS: Para el diseño y estilo de la interfaz.
-   JavaScript: Para la funcionalidad de la calculadora, incluyendo la lógica de las operaciones matemáticas y la interacción con el usuario.

**Cómo utilizar:**

1.  Abre el archivo index.html en un navegador web.
2.  Selecciona los números que deseas realizar operaciones matemáticas.
3.  Selecciona la operación matemática que deseas realizar (suma, resta, multiplicación, división) haciendo clic en el botón correspondiente.
4.  El resultado de la operación se mostrará en la pantalla de la calculadora.
5.  Para borrar un número ingresado, haz clic en el botón ❎.
6.  Para borrar toda la operación, haz clic en el botón "C".
### 💻 Escritorio
[![Captura-de-pantalla-2024-05-07-122258.png](https://i.postimg.cc/zXCtW13c/Captura-de-pantalla-2024-05-07-122258.png)](https://postimg.cc/Wh4wLCGG)

* **Juego de Adivinanza** Este juego pone a prueba la habilidad del usuario para adivinar un número secreto.

**Características:**

-   Un número secreto generado aleatoriamente
-   Muestra la cantidad de Intentos para adivinar el número
-   Debes introducir un numero entre 1 y 100
-   Pistas después de cada intento (El número es menor, El número es mayor y Has acertado ¡¡Felicidades!! 🎉🎉 )

**Tecnologías utilizadas:**

-   HTML: Para la estructura básica del juego.
-   CSS: Para el diseño y estilo de la interfaz.
-   JavaScript: Para la lógica del juego, incluyendo la generación del número secreto y las pistas.

**Cómo utilizar:**

1.  Abre el archivo index.html en un navegador web.
2.  Ingresa un número en el campo.
3.  Haz clic en el botón "Comprobar".
4.  El juego te dirá si tu número es (El número es menor, El número es mayor y Has acertado ¡¡Felicidades!! 🎉🎉).
6. ¡Ganas si adivinas el número secreto mostrando la cantidad de intentos!
### 💻 Escritorio
[![Captura-de-pantalla-2024-05-07-123352.png](https://i.postimg.cc/ZKnnvJfT/Captura-de-pantalla-2024-05-07-123352.png)](https://postimg.cc/N5hBWvqV)

* **Web Clima** Este proyecto web te permite obtener información del clima de cualquier país. Se utiliza la API de [OpenWeatherMap](https://openweathermap.org/api) para recuperar datos climáticos en tiempo real y mostrarlos al usuario.

**Características:**

 -   Búsqueda por país para obtener información climática específica.
 -   Muestra la temperatura actual, la humedad, el nombre del país y la descripción meteorológica.

**Tecnologías utilizadas:**

 -   HTML: Para la estructura básica de la página web.
 -   CSS: Para el diseño y estilo de la interfaz.
 -   JavaScript: Para la funcionalidad de la búsqueda, la recuperación de datos climáticos de la API y la presentación de la información al usuario.
 -   API de [OpenWeatherMap](https://openweathermap.org/api): Para obtener datos climáticos en tiempo real.

**Cómo utilizar:**

 - Ingresa a [OpenWeatherMap](https://openweathermap.org/api) para crearte una cuenta y accede al archivo script.js y cambia la `API_key` por la **key** que se generó en tu cuenta.
 -  Abre el archivo index.html en un navegador web.
 -  Ingresa el nombre del país del que deseas obtener información climática en el campo de búsqueda.
 -  Presiona en el botón "Buscar".
### 💻 Escritorio
[![Captura-de-pantalla-2024-05-07-124309.png](https://i.postimg.cc/VLP1m13G/Captura-de-pantalla-2024-05-07-124309.png)](https://postimg.cc/XXLtgMNd)
 - **Venta de viajes** Este proyecto simple permite al usuario seleccionar un país de una lista predefinida para explorar ofertas de viajes relacionadas con ese destino. Al seleccionar un país, el usuario puede acceder a información como:

 - País: Nombre del alojamiento
 - Precio
 - Descripción

**Características:**
-   Lista predefinida de países con detalles en el archivo `cities.js`.
- Importamos el archivo `cities.js` en el `script.js`
`import { barcelona, roma, paris, londres } from  './cities.js';code here`

**Cómo utilizar:**
1.  Abre el archivo index.html en un navegador web.
2.  Selecciona un país de la lista predefinida.
3.  Explora las diferentes opciones de precios y descripción de cada país.
### 💻 Escritorio
[![Captura-de-pantalla-2024-05-07-160532.png](https://i.postimg.cc/RVWVG9jX/Captura-de-pantalla-2024-05-07-160532.png)](https://postimg.cc/QHr3dLNT)
**Recursos**

Para obtener más información sobre HTML, CSS y JavaScript, puedes consultar los siguientes recursos:

* [MDN Web Docs](https://developer.mozilla.org/es-US/docs/Web/JavaScript)
* [Eloquent JavaScript](https://eloquentjavascript.net/)
* [Guía de HTML](https://www.w3schools.com/html/)
* [Guía de CSS](https://www.w3schools.com/css/)