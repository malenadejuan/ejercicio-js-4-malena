let palabras = ["Papelera", "Mesa", "Cafetera", "Sandwichera", "Sofá", "Silla"];

const palabrasNuevo = [];

palabras.forEach(function (palabra, index) {
  if (index % 2 === 0) {
    palabrasNuevo.push(palabra.toUpperCase());
  } else {
    palabrasNuevo.push(palabra);
  }
});

console.log(palabrasNuevo);

