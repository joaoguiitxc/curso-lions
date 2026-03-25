let numbs = [2,8,9,10,3,4];
let menor = numbs[0];

for ( let i = 0 ; i < numbs.length; i++) {
    if (numbs[i] < menor) {
        menor = numbs[i]
    }
}
  console.log(menor)
