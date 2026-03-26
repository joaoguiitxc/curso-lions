let numeros = [1, 2, 3, 4, 9, 6];
let crescente = true;

for (let i = 0; i < numeros.length - 1; i++) {
  if (numeros[i] > numeros[i + 1]) {
    crescente = false;
  }
}

console.log(crescente ? "Crescente" : "decrescente");