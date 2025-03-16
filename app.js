const PALABRAS = [
    'PLATO', 'QUESO', 'MAREA', 'MAREO', 'BETAS', 'GUISO', 'GUIAR', 'GUIAS', 'MESAS', 'GATOS', 'PERRO', 'MONOS', 'FRUTA', 'COMER', 'FLUIR', 'OIDOS', 'BOCAS', 'BESOS', 'MESES',
    'NIÑOS', 'NIÑAS', 'ABETO', 'ACTOR', 'AGUAS', 'AGUDO', 'ALADO', 'ALBAS', 'ALTAR', 'ANTON', 'ATIZO', 'AVION', 'ABEJA', 'BACHE', 'BABAS', 'BEBES', 'BEBER', 'BALAS', 'BELEN',
    'CABRA', 'CAFES', 'CAJAS', 'CAJON', 'COJIN', 'CENAR', 'COSER', 'CIEGO', 'CAIDA', 'CEJAS', 'OJEAR', 'MANOS', 'QUIEN', 'VIOLA', 'PIANO', 'YATES', 'YOGUR', 'ZORRO', 'ZORRA',
    'SUEÑO', 'TELON', 'VALER', 'VACAS', 'PESOS', 'PILAS', 'LIBRO', 'LIBRA', 'LIGAR', 'LEJOS', 'LUGAR', 'ESTAR', 'HUIDA', 'HOJAS', 'ARBOL', 'HASTA', 'PELEA', 'PUÑOS', 'CARGA',
    'FUEGO', 'HIELO', 'MUNDO', 'NUEVE', 'CARTA', 'RATON', 'GALLO', 'POLLO', 'PICOS', 'HADAS', 'VOLAR', 'NADAR', 'ATRAS', 'ABAJO', 'NEGRO', 'VERDE', 'ROJOS', 'PIÑAS', 'KIWIS',
    'JUGAR', 'CREAR', 'JESUS', 'JURAR', 'LENTA', 'LENTO', 'LIBIA', 'PASEO', 'SIETE', 'PLAYA', 'PLENO', 'TACOS', 'TEXAS', 'SANTA', 'SANTO', 'PINTO', 'PODER', 'NOTAS', 'NUBES',
    'HUESO', 'CUERO', 'SENOS', 'CELDA', 'JUEGO', 'MUERE', 'ATAUD', 'PINOS', 'PELOS', 'NEGRO', 'NEGRA', 'ASTRO', 'TRIBU', 'BANDA', 'GIRAR', 'YESOS', 'MIRAR', 'HELIO', 'TABLA',
    'SUELO', 'DEDOS', 'PEDOS', 'BOBOS', 'BOBAS', 'MUDAR', 'CANTO', 'PEGAR', 'HUCHA', 'LUCHA', 'MUCHA', 'TRUFA', 'PIJOS', 'BAILO', 'GOMAS', 'LAVAR', 'GAITA', 'VIVIR', 'COCHE',
    'HUECO', 'ESQUI', 'MENEO', 'LUEGO', 'CITAR', 'CINCO', 'GRITO', 'GRITA', 'BUSCO', 'BUSCA', 'WIKIS', 'FOTOS', 'ACASO', 'HORNO', 'ROSAS', 'RITMO', 'SITIO', 'TUMBA', 'TRATO',
    'CARTA', 'CIELO', 'ELLOS', 'PAGAR', 'MADRE', 'HONOR', 'PIANO', 'PAUTA', 'SUAVE', 'QUIEN', 'VAPOR', 'TECHO', 'TONTO', 'TONTA', 'TRATO', 'VITAL', 'JOVEN', 'NUEVO', 'HUEVO',
    'MIEDO', 'NACER', 'NORTE', 'OESTE', 'FALSO', 'MOVIL', 'GENTE', 'AMIGA', 'AMIGO', 'BARCO', 'DULCE', 'CAMPO', 'BOMBA', 'CORTO', 'CORTA', 'PADRE', 'UNIDO', 'VACIO', 'UNICO',
    'MANDO', 'PLANO', 'PLAZA', 'FALSO', 'JARRO', 'BAJON', 'CERRO', 'BAÑAR', 'RAJAR', 'BAJAR', 'BAILA', 'BAILO', 'PUEDO', 'PONER', 'QUITA', 'QUITO', 'MARES', 'MARTE', 'VENUS',
    'CANTE', 'HIJOS', 'HIJAS', 'MATES', 'LOCOS', 'LOCAS', 'GORRA', 'GORDA', 'GORDO', 'SUBIR', 'SOÑAR', 'SOÑAD', 'CASAS', 'VERGA', 'COSAS', 'OSITO', 'PERAS', 'PUNTO', 'LINEA',
    'DOBLE', 'SEXTO', 'NOVIA', 'NOVIO', 'CASAR', 'CAZAR', 'JUGOS', 'ZUMOS', 'VALER', 'VALIO', 'SALID', 'SALIR', 'PAJAR', 'LAPIZ', 'RALLA', 'RAYAS', 'FUMAR', 'FUMAD', 'HUMOS',
    'SIGNO', 'METAL', 'PLATA', 'VASOS', 'LITRO', 'GRAMO', 'METRO', 'RAMON', 'JULIA', 'MARIA', 'FRIOS', 'CORRE', 'PULPO', 'ALGAS', 'CHINA', 'RUSIA', 'CHILE', 'HAITI', 'INDIA',
    'JAPON', 'MALTA', 'MAURU', 'NEPAL', 'CATAR', 'QATAR', 'SIRIA', 'TOGAN', 'GOLEM', 'EDITO', 'ELEVO', 'EDITA', 'ERROR', 'LUJOS', 'RECTO', 'RECTA', 'CITAS', 'FECHA', 'NIEGA',
    'NIEGO', 'LOCAL', 'HORAS', 'TIPOS', 'ALTAS', 'ALTOS', 'BAJAS', 'BAJOS', 'VILLA', 'ALDEA', 'CORAL', 'MIRAD', 'TONOS', 'TOMPA', 'SOLOS', 'SOLAS', 'GAITA', 'GUION', 'CAMAS',
    'TRECE', 'MARCO', 'DADOS', 'BOTON', 'TARDE', 'ESTAN', 'ESTOY', 'FAVOR', 'FINDE', 'ENERO', 'MARZO', 'ABRIL', 'JUNIO', 'JULIO', 'LUNES', 'VUELO', 'RUTAS', 'REMIX', 'NUNCA',
    'LECHE', 'ROLLO', 'DISTE', 'PILAR', 'CALLA', 'MOLAR', 'MILES', 'DILES', 'TEXTO', 'MENTE', 'CONDE', 'MONJE', 'MONJA', 'GENIO', 'MARTE', 'URANO', 'VENUS', 'CREMA', 'MOTOR',
    'FALTA', 'FALTO', 'FALLO', 'COLOR', 'DECIR', 'FUERA', 'JUEGA', 'PARED', 'ESRTO', 'RESTA', 'PONTE', 'LUCES', 'TODAS', 'TODOS', 'BUENO', 'BUENA', 'ROMPE', 'IGUAL', 'VECES',
    'PECES', 'NOCHE', 'UNICA', 'RARAS', 'RAROS', 'FELIZ', 'LADOS', 'DAVID', 'DISCO', 'SUDAR', 'LLAMA', 'NENAS', 'NENES', 'VIEJO', 'VIEJA', 'COMAS', 'MODOS', 'SALVO', 'SALVA',
    'FRITO', 'REGLA', 'TABLA', 'GEMAS', 'PILAS', 'LISTO', 'LISTA', 'MANTA', 'MUROS', 'NINJA'
]; 

const PALABRAS_VALIDAS = [...PALABRAS];

let palabraCorrecta;
let intentos = 0;
let intentoActual = [];

function init() {
    palabraCorrecta = PALABRAS[Math.floor(Math.random() * PALABRAS.length)];
    crearTablero();
    crearTeclado();
    document.addEventListener('keydown', manejarTeclado);
}

function crearTablero() {
    const tablero = document.getElementById('tablero');
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            const celda = document.createElement('div');
            celda.classList.add('celda');
            if (i === 0) celda.classList.add('activa');
            tablero.appendChild(celda);
        }
    }
}

function crearTeclado() {
    const teclado = document.getElementById('teclado');
    const filas = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
        ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Borrar']
    ];

    filas.forEach(fila => {
        const divFila = document.createElement('div');
        divFila.classList.add('fila-teclado');
        
        fila.forEach(tecla => {
            const boton = document.createElement('button');
            boton.classList.add('tecla');
            boton.textContent = tecla;
            boton.dataset.tecla = tecla;
            boton.addEventListener('click', () => manejarClickTecla(tecla));
            divFila.appendChild(boton);
        });
        
        teclado.appendChild(divFila);
    });
}

function manejarTeclado(e) {
    const tecla = e.key.toUpperCase();
    
    if (e.key === 'Backspace') manejarBorrar();
    else if (e.key === 'Enter') manejarEnter();
    else if (/^[A-ZÑ]$/.test(tecla)) manejarLetra(tecla);
}

function manejarClickTecla(tecla) {
    if (tecla === 'Borrar') manejarBorrar();
    else if (tecla === 'Enter') manejarEnter();
    else manejarLetra(tecla);
}

function manejarLetra(tecla) {
    if (intentoActual.length < 5 && intentos < 6) {
        intentoActual.push(tecla);
        actualizarTablero();
    }
}

function manejarBorrar() {
    if (intentoActual.length > 0) {
        intentoActual.pop();
        actualizarTablero();
    }
}

function actualizarTablero() {
    const celdas = document.querySelectorAll('.celda.activa');
    celdas.forEach((celda, i) => {
        celda.textContent = intentoActual[i] || '';
    });
}

async function manejarEnter() {
    if (intentoActual.length !== 5) return;
    
    const palabra = intentoActual.join('');
    if (!PALABRAS_VALIDAS.includes(palabra)) {
        mostrarMensaje('Palabra no válida');
        document.querySelector('.tablero').classList.add('shake');
        setTimeout(() => {
            document.querySelector('.tablero').classList.remove('shake');
        }, 500);
        return;
    }

    const celdas = document.querySelectorAll('.celda.activa');
    const letras = [...intentoActual];
    const resultado = [];
    
    letras.forEach((letra, i) => {
        if (letra === palabraCorrecta[i]) {
            resultado[i] = 'correcta';
        } else if (palabraCorrecta.includes(letra)) {
            resultado[i] = 'presente';
        } else {
            resultado[i] = 'ausente';
        }
    });

    celdas.forEach((celda, i) => {
        setTimeout(() => {
            celda.classList.add('flip', resultado[i]);
        }, i * 300);
    });

    actualizarTeclado(letras, resultado);
    intentos++;
    intentoActual = [];
    
    if (palabra === palabraCorrecta) {
        mostrarMensaje(`¡Felicidades, acertaste tu palabra: ${palabraCorrecta} 🎉!`, true);
        document.removeEventListener('keydown', manejarTeclado);
        await confeti();
        return;
    }
    
    if (intentos === 6) {
        mostrarMensaje(`¡Perdiste 😭!. La palabra era: ${palabraCorrecta}`);
        document.removeEventListener('keydown', manejarTeclado);
        return;
    }
    
    activarNuevaFila();
}

function activarNuevaFila() {
    const celdas = document.querySelectorAll('.celda');
    // Remover clase activa de todas las celdas
    celdas.forEach(celda => celda.classList.remove('activa'));
    
    // Activar solo la fila actual
    const inicio = intentos * 5;
    for (let i = inicio; i < inicio + 5; i++) {
        celdas[i].classList.add('activa');
    }
}

function actualizarTeclado(letras, resultado) {
    letras.forEach((letra, i) => {
        const tecla = document.querySelector(`[data-tecla="${letra}"]`);
        if (!tecla) return;
        
        const estadoActual = tecla.dataset.estado;
        const nuevoEstado = resultado[i];
        
        if (!estadoActual || estadoActual === 'ausente') {
            tecla.dataset.estado = nuevoEstado;
        }
    });
}

function mostrarMensaje(texto, ganaste = false) {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = texto;
    mensaje.style.color = ganaste ? '#4CAF50' : '#890B0B';
}

async function confeti() {
    const confettiSettings = { particleCount: 100, spread: 70, origin: { y: 0.6 } };
    for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 200));
        confetti({
            ...confettiSettings,
            angle: Math.random() * 60 - 30
        });
    }
}

init();