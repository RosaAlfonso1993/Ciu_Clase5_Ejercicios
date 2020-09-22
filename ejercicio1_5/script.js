/*function cambiarDimensionFuente(size) {
    return function() { 
        document.body.style.fontSize = size + 'px';
        };
}
var size8 = cambiarDimensionFuente(8);
var size16 = cambiarDimensionFuente(16);
var size24 = cambiarDimensionFuente(24);

function setClicks(){
    document.getElementById('fuente-8').onclick = size8;
    document.getElementById('fuente-16').onclick = size16;
    document.getElementById('fuente-24').onclick = size24;
}*/
function cambiarDimensionFuenteSinClousere(size) {
    return function() { 
        document.body.style.fontSize = size + 'px';
        };
}

var size8 = document.querySelector("#fuente-8");
var size16 = document.querySelector("#fuente-16");
var size24 = document.querySelector("#fuente-24");

size8.addEventListener("click",cambiarDimensionFuenteSinClousere(8));
size16.addEventListener("click",cambiarDimensionFuenteSinClousere(16));
size24.addEventListener("click",cambiarDimensionFuenteSinClousere(24));

/*
1. ¿En qué parte del código se genera un closure? ¿Por qué?
Los clouseres se generan en size8, size16 y size24. Estas variables son clouseres que incorporan la funcion cambiarDimensionFuente(size).

2. ¿En qué parte del código se establece que al hacer click sobre el elemento con id fuente-8 se cambie el tamaño de las fuentes de la página?
En la funcion setClicks().

3. Supone que eliminamos la función setClicks y dejamos su código “libre” dentro de las etiquetas <script> … </script>. ¿Qué mensaje de error te muestra la consola de depuración? (Activa la consola si no la tienes activada) ¿Por qué aparece ese mensaje de error?
El error que aparece es: 
index.html:8 Uncaught ReferenceError: setClicks is not defined at onload (index.html:8)

4. ¿Debemos escribir document.getElementById('fuente-8').onclick = size8; ó document.getElementById('fuente-8').onclick = size8(); ?¿Por qué?
Se escribe: document.getElementById('fuente-8').onclick = size8; 
Porque size8 requiere solo un parametro que ya se le dio cuando se creo la variable y se le asigno el valor de la funcion cambiarDimensionFuente(size).

5. Supón que al cargar la página queremos que el tamaño inicial de fuente sea 8 y para ello nos valemos de la función setClicks. ¿Debemos escribir dentro de esta función size8; ó size8();? ¿Por qué?
Se debe usar size8() ya que ahora es una funcion que cambia el tamaño del texto

6. Las closures no siempre son necesarias, incluso a veces se generan involuntariamente o innecesariamente consumiendo recursos del sistema que podrían ahorrarse. ¿Qué ventajas le ves al uso de closures en este código? ¿Y qué inconvenientes?
Las ventajas son la redundancia, simpleza, legibilidad y la funcion es privada, es decir se accede no se puede accerder a la funcion cambiarDimensionFuente directamente.
La desventaja es que se activa un closere a la vez.

7. Reescribí el código (hacelo como mejor creas cambiando todo aquello que consideres necesario) de forma que obtengas el mismo resultado pero sin hacer uso de closures.
Modifique el ejercicio para no utilizar closure implementando en su lugar un callback. Reutilice la funcion cambiarDimensionFuente para no hacer tanta redundancia. Esta funcion sin el "return function()" que esta adentro hace que el tamaño de la letra del ultimo evento se quede fijo y los demas eventos no funcionen.
 
*/