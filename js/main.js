// 1. Código javaScript. Funciones:

// 2. Aviso de contenido del DOM cargado

domCargado = () => {
    console.log('Contenido del DOM cargado');
};

// 3. Inserción del value de textarea con mensaje

insertarDiv = () => {
    origen.insertAdjacentHTML('afterend', '<div id="div-valor-origen" style="background-color: gold; border: 2px solid black; margin-bottom: 20px; padding: 0 5px"><p id="valor-origen">"' + origen.value + '"<p>' + '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p></div>');

    if (origen.value == '') {
        document.getElementById('div-valor-origen').style.display = 'none';
    };
};

// 3bis. Actualización del value de textarea con mensaje

actualizarDiv = () => {

    let valorOrigen = origen.value;
    document.getElementById('valor-origen').innerText = ('"' + valorOrigen + '"');

    if (origen.value == '') {
        document.getElementById('div-valor-origen').style.display = 'none';
    } else {
        document.getElementById('div-valor-origen').style.display = 'block';
    };
};

// 4. Actualización de botones

actualizarBotones = (listaInputs, boton) => {
    
    for (let i = 0; i < listaInputs.length; i++) {
        if (origen.value != '') {
            listaInputs[i].disabled = false;
            boton.disabled = false
        } else {
            listaInputs[i].disabled = true;
            boton.disabled = true;
        };
    };
};

// 5. Botones superiores

botoneraSuperior = () => {

    // Botones reemplazar y agregar
    let botonReemplazar = document.getElementById('btn-reemplazar');
    let botonesAgregar = document.getElementsByClassName('btn-agregar');

    // 5a. Funcionalidad botón reemplazar
    botonReemplazar.addEventListener('click', () => {
        destino.innerText = origen.value;
    });

    // 5b. Funcionalidad botón Agregar (una vez)
    botonesAgregar[0].addEventListener('click', () => {
        destino.innerText += origen.value;
    });

    // 5c. Funcionalidad botón Agregar (5 veces)
    botonesAgregar[1].addEventListener('click', () => {
        destino.innerText += origen.value.repeat(5);
    });

    // 5d. Funcionalidad botón Agregar (10 veces)
    botonesAgregar[2].addEventListener('click', () => {
        destino.innerText += origen.value.repeat(10);
    });

    // 5e. Funcionalidad botón Agregar (n veces)
    botonesAgregar[3].addEventListener('click', () => {
        n = parseInt(prompt('Ingrese cantidad de repeticiones'));
        destino.innerText += origen.value.repeat(n);
    });
};

// 6. Botones inferiores

botoneraInferior = (ultimoBoton) => {

    // Botones
    let botonVaciar = document.getElementsByClassName('btn-vaciar')[0];
    let botonMayusculas = document.getElementsByClassName('btn-convertir-a-mayusculas')[0];

    // 6a. Funcionalidad botón vaciar
    botonVaciar.addEventListener('click', () => {
        destino.innerText = '';
    });

    // 6b. Funcionalidad botón convertir a mayúsculas
    botonMayusculas.addEventListener('click', () => {
        destino.innerText = destino.innerText.toUpperCase();
    });

    // 6c. Funcionalidad botón convertir a minúsculas
    ultimoBoton.addEventListener('click', () => {
        destino.innerText = destino.innerText.toLowerCase();
    });
};

// 7. Agrego el "ok"

agregarOk = () => {
    let elementosDeLista = document.querySelectorAll('li');
    for (let i = 0; i < elementosDeLista.length; i++) {
        elementosDeLista[i].innerText = '[Ok] ' + elementosDeLista[i].innerText;
    };
}

/* ----------------------------------------------------------- */

// Evento carga completa del HTML

document.addEventListener('DOMContentLoaded', () => {

    // Variables de origen y destino del texto
    let origen = document.getElementById('origen');
    let destino = document.getElementById('destino');

    // Variables botones
    let botones = document.getElementsByTagName('input');
    let botonMinusculas = document.querySelector('button');
    
    // 2. Aviso de contenido del DOM cargado
    domCargado();

    // 3. Inserción del value de textarea con mensaje
    insertarDiv();

    // Evento input del textarea

    origen.addEventListener('input', () => {

        // 3bis. Actualización del value de textarea con mensaje
        actualizarDiv();
        
        // 4. Actualización de botones
        actualizarBotones(botones,botonMinusculas);
    })

    // 5. Función botones superiores
    botoneraSuperior();

    // 6. Función botones inferiores
    botoneraInferior(botonMinusculas);

    // 7. Agrego "ok" en la lista
    agregarOk();
    
});
