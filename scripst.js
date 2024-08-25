function contarCaracteres(texto) {
    return texto.length;
}

function recortarTexto(texto, cantidad) {
    return texto.substring(0, cantidad);
}

function dividirTexto(texto, separador) {
    return texto.split(separador);
}

function repetirTexto(texto, veces) {
    return texto.repeat(veces);
}

function invertirTexto(texto) {
    return texto.split("").reverse().join("");
}

function contarPalabra(texto, palabra) {
    let regex = new RegExp(palabra, "gi");
    return (texto.match(regex) || []).length;
}

function esPalindromo(texto) {
    let textoLimpio = texto.toLowerCase().replace(/[\W_]/g, "");
    let textoInvertido = textoLimpio.split("").reverse().join("");
    return textoLimpio === textoInvertido;
}

function eliminarPatron(texto, patron) {
    return texto.split(patron).join("");
}

function numeroAleatorio() {
    return Math.floor(Math.random() * 100) + 501;
}

function esCapicua(numero) {
    let strNum = numero.toString();
    let strNumInvertido = strNum.split("").reverse().join("");
    return strNum === strNumInvertido;
}

function factorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function esPar(numero) {
    return numero % 2 === 0;
}

function convertirTemperatura(grados, tipo) {
    if (tipo === "C") return (grados * 9 / 5) + 32;
    if (tipo === "F") return (grados - 32) * 5 / 9;
}

function convertirBase(numero, base) {
    if (base === 2) return parseInt(numero, 2);
    if (base === 10) return numero.toString(2);
}

function aplicarDescuento(monto, descuento) {
    return monto - (monto * (descuento / 100));
}

function calcularAnios(fecha) {
    let hoy = new Date();
    let diferencia = hoy - fecha;
    return Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
}

function contarVocalesYConsonantes(texto) {
    const vocales = texto.match(/[aeiouáéíóúü]/gi) || [];
    const consonantes = texto.match(/[bcdfghjklmnñpqrstvwxyz]/gi) || [];
    return { vocales: vocales.length, consonantes: consonantes.length };
}

function validarNombre(texto) {
    return /^[A-Za-z\s]+$/.test(texto);
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function elevarCuadrado(array) {
    return array.map(num => num * num);
}

function encontrarMaxMin(array) {
    let max = Math.max(...array);
    let min = Math.min(...array);
    return { max, min };
}

function separarParesImpares(array) {
    let pares = array.filter(num => num % 2 === 0);
    let impares = array.filter(num => num % 2 !== 0);
    return { pares, impares };
}

function ordenarArray(array, orden) {
    return array.sort((a, b) => orden === "asc" ? a - b : b - a);
}

function eliminarDuplicados(array) {
    return [...new Set(array)];
}

function calcularPromedio(array) {
    let suma = array.reduce((acc, num) => acc + num, 0);
    return suma / array.length;
}

class Pelicula {
    constructor(titulo, director, anio) {
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
    }

    fichaTecnica() {
        return `Título: ${this.titulo}\nDirector: ${this.director}\nAño: ${this.anio}`;
    }
}

// Función para ejecutar ejercicios al hacer clic en los enlaces
function ejecutarEjercicio(numero) {
    switch (numero) {
        case 1:
            alert(contarCaracteres("Texto de prueba"));
            break;
        case 2:
            alert(recortarTexto("magico gonzales", 10));
            break;
        case 3:
            alert(dividirTexto("leo-de-messi", "-").join(", "));
            break;
        case 4:
            alert(repetirTexto("leo messi", 3));
            break;
        case 5:
            alert(invertirTexto("messi"));
            break;
        case 6:
            alert(contarPalabra("messi", "messi"));
            break;
        case 7:
            alert(esPalindromo("Anita lava la tina"));
            break;
        case 8:
            alert(eliminarPatron("messi", "messi"));
            break;
        case 9:
            alert(numeroAleatorio());
            break;
        case 10:
            alert(esCapicua(12321));
            break;
        case 11:
            alert(factorial(5));
            break;
        case 12:
            alert(esPrimo(7));
            break;
        case 13:
            alert(esPar(8));
            break;
        case 14:
            alert(convertirTemperatura(25, "C") + " °F");
            alert(convertirTemperatura(77, "F") + " °C");
            break;
        case 15:
            alert(convertirBase("1010", 10));
            alert(convertirBase(10, 2));
            break;
        case 16:
            alert(aplicarDescuento(1000, 10));
            break;
        case 17:
            alert(calcularAnios(new Date(2000, 0, 1)));
            break;
        case 18:
            alert(JSON.stringify(contarVocalesYConsonantes("mauricio")));
            break;
        case 19:
            alert(validarNombre("Juan Pérez"));
            break;
        case 20:
            alert(validarEmail("mauric@2002.com"));
            break;
        case 21:
            alert(JSON.stringify(elevarCuadrado([1, 2, 3, 4])));
            break;
        case 22:
            alert(JSON.stringify(encontrarMaxMin([1, 2, 3, 4, 5])));
            break;
        case 23:
            alert(JSON.stringify(separarParesImpares([1, 2, 3, 4, 5])));
            break;
        case 24:
            alert(JSON.stringify(ordenarArray([5, 3, 8, 1], "asc")));
            alert(JSON.stringify(ordenarArray([5, 3, 8, 1], "desc")));
            break;
        case 25:
            alert(JSON.stringify(eliminarDuplicados([1, 2, 2, 3, 4, 4])));
            break;
        case 26:
            alert(calcularPromedio([1, 2, 3, 4, 5]));
            break;
        case 27:
            const pelicula = new Pelicula("Inception", "Christopher Nolan", 2010);
            alert(pelicula.fichaTecnica());
            break;
        default:
            alert("Ejercicio no definido");
    }
}
