function modificaPares(palabras, fx) {
  let nuevasPalabras = [];

  for (let i in palabras) {
    if (i % 2 !== 0) {
      nuevasPalabras.push(fx(palabras[i]));
    } else {
      nuevasPalabras.push(palabras[i]);
    }
  }
  return nuevasPalabras;
}

const palabras = ["Papelera", "Mesa", "Cafetera", "Sandwichera", "Sofá", "Silla"];
console.log(modificaPares(palabras, palabra => palabra.toUpperCase()));


/* let palabras = ["Papelera", "Mesa", "Cafetera", "Sandwichera", "Sofá", "Silla"];

const palabrasNuevo = [];

palabras.forEach(function (palabra, index) {
  if (index % 2 === 0) {
    palabrasNuevo.push(palabra.toUpperCase());
  } else {
    palabrasNuevo.push(palabra);
  }
});

console.log(palabrasNuevo);

 */
