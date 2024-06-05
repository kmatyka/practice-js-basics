const a = '4.2';
const b = 9;

console.log(typeof(a), typeof(b));

let c = parseFloat(a);
console.log(typeof(c), typeof(b));
const wyniki = [c*b,c/b,c+b,c-b]
console.log(wyniki[0],wyniki[1],wyniki[2],wyniki[3]);
wyniki.forEach(wynik => {
    if(wynik>20){
        console.log("Wynik "+wynik+" jest większy od 20");
    }else{
        console.log("Wynik "+wynik+" jest mneijszy od 20");
    }
});