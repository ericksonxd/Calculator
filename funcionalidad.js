var ElementoA;
var ElementoB;
var operacion;
var eventSum = false;
var eventRest= false;
var eventMult = false;
var eventDiv = false;

function init() {
// deteccion key


     






  // Resultado
  let resultado = document.getElementById("resultado");
  // Numeros
  let uno = document.getElementById("uno");
  let dos = document.getElementById("dos");
  let tres = document.getElementById("tres");
  let cuatro = document.getElementById("cuatro");
  let cinco = document.getElementById("cinco");
  let seis = document.getElementById("seis");
  let siete = document.getElementById("siete");
  let ocho = document.getElementById("ocho");
  let nueve = document.getElementById("nueve");
  let cero = document.getElementById("cero");

  //operadores
  let suma = document.getElementById("+");
  let resta = document.getElementById("-");
  let multiplicacion = document.getElementById("*");
  let division = document.getElementById("/");
  let igual = document.getElementById("igual");

  //reset

  let reset = document.getElementById("reset");

  //botones funcionales
  uno.onclick = function (e) {
    resultado.value = resultado.value + "1";
  };
  dos.onclick = function (e) {
    resultado.value = resultado.value + "2";
  };
  tres.onclick = function (e) {
    resultado.value = resultado.value + "3";
  };
  cuatro.onclick = function (e) {
    resultado.value = resultado.value + "4";
  };
  cinco.onclick = function (e) {
    resultado.value = resultado.value + "5";
  };
  seis.onclick = function (e) {
    resultado.value = resultado.value + "6";
  };
  siete.onclick = function (e) {
    resultado.value = resultado.value + "7";
  };
  ocho.onclick = function (e) {
    resultado.value = resultado.value + "8";
  };
  nueve.onclick = function (e) {
    resultado.value = resultado.value + "9";
  };
  cero.onclick = function (e) {
    resultado.value = resultado.value + "0";
  };

  //Funciones de guardado del primer elemento
  suma.onclick = function (e) {
    ElementoA = resultado.value;
    operacion = "+";
    limpiar();
  };
  //
  resta.onclick = function (e) {
    ElementoA = resultado.value;
    operacion = "-";
    limpiar();
    //
  };

  multiplicacion.onclick = function (e) {
    ElementoA = resultado.value;
    operacion = "*";
    limpiar();
  };
  //
  division.onclick = function (e) {
    ElementoA = resultado.value;
    operacion = "/";
    limpiar();
  };

  //funcion Limpiar

  function limpiar() {
    resultado.value = null;
  }

  // funcion de reset
  reset.onclick = function resetear() {
    reset.onclick;
    resultado.value = null;
    ElementoA = 0;
    ElementoB = 0;
  };

  //funcion igual 
  igual.onclick = function equal() {
    ElementoB = resultado.value;
    calcular();
  };
// funcion calcular
  function calcular() {
    switch (operacion) {
      case "+":
        resultado.value = parseFloat(ElementoA) + parseFloat(ElementoB);

        break;
      case "-":
        resultado.value = parseFloat(ElementoA) - parseFloat(ElementoB);

        break;

      case "*":
        resultado.value = parseFloat(ElementoA) * parseFloat(ElementoB);

        break;

      case "/":
        resultado.value = parseFloat(ElementoA) / parseFloat(ElementoB);
        break;
    }
  }
}
