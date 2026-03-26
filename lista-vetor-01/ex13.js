let a = [1, 2, 3, 4, 5, 6, 7, 8, 7, 10] // o x vai ser 7
let s = 0;
let qtd = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] === 7) {
        qtd++
    }
}
console.log(qtd);

