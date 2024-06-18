
// Ejecutando sonidos

const playButtons = document.querySelectorAll('button'); // listado de todos los botones de sonidos

// Se recorren los botones para agregarles un evento de sonido a cada uno
for (button of playButtons) {

    let className = button.classList[1]; // se toma el nombre de la segunda clase de los botones

    // Se agrega a cada boton la ejecucíon de la funcionalidad ejecutar su sonido ante un evento click
    button.addEventListener('click', () => {
        playSound(className);
    });

    // Presionar el botón
    button.addEventListener('keydown', () => {
        button.classList.add('activa');
    });

    //Soltar el botón
    button.addEventListener('keyup', () => {
        button.classList.remove('activa');
    });
}

const playSound = (className) => {
    document.querySelector(`#sonido_${className}`).play();
}