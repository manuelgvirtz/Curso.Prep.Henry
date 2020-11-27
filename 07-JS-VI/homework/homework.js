// Do not change any of the function names

function invocarCallback(cb) { 
  // Invoca al callback `cb`
  cb();

  }

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`. 'cb' sigue siendo un callback.
  // No es necesario devolver nada

  const sumaDeNumeros = numeros.reduce(function(a, b) {
    return a + b
  }, 0);
  cb(sumaDeNumeros)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  array.forEach(function(elemento) {
    cb(elemento)
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  const arrayNuevo = []
  array.forEach(function(elemento2){
    arrayNuevo.push(cb(elemento2))
  });
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
