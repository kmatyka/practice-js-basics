/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

for(let i=1;i<10;i++){
    let wynik = i*x;
    console.log(x+" x "+i+" = "+wynik);
}


/* rozwiązanie z pętlą while  */
const a = prompt('Podaj podstawe potęgi:');
let n = prompt('Podaj wykładnik potęgi:');
let potega = 1;
while(n>0){
    potega *= a;
    n--;
}
console.log(potega);