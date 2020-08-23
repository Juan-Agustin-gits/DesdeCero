function datosRandom(max,min) {
        let cantidadDeDatos = document.getElementById("cantidad_Datos");
                cantidadDeDatos = parseInt(cantidadDeDatos.value);
        let array_1 = new Array(cantidadDeDatos)

                for (let index = 0; index < cantidadDeDatos; index++) {
                        let random = Math.random() * (max - min) + min ;
                        random = parseInt(random);
                        array_1[index] = random;
                }
        let interfaz = document.getElementById("resultado");
                interfaz.innerHTML = array_1;
}
function anonima() {

        let minimo = document.getElementById("caja_minimo");
                minimo = parseInt(minimo.value);
        
        let maximo = document.getElementById("caja_maximo");
                maximo = parseInt(maximo.value);
        datosRandom(maximo,minimo);
}
let botonGenerar = document.getElementById("Generar");
botonGenerar.addEventListener("click",anonima);

// let botonAlmacenar = document.getElementById("botonGuardar");

// let array_2 = new Array(0);

// let index = 0;
// function moreOne() {
//         let datos = document.getElementById("datosDeIngreso");
//         datos = parseInt(datos.value);
//         //datos que son del boton almacenar
//         array_2[index] = datos;
//         index = index + 1;
//         console.log(array_2);
// }
// botonAlmacenar.addEventListener("click",moreOne);