const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

let wynik = getSum(a,b,c);
let czyParzysta = isEven(wynik);
showInfo(wynik,czyParzysta);



function showInfo(a,info){
    switch (info){
        case null: console.log("Podany argument "+a+" nie jest liczbą");break;
        case true: console.log("Podany argument "+a+" jest parzysty");break;
        case false: console.log("Podany argument "+a+" jest nieparzysty");break;
    }
}

function isEven(a){
    if(typeof(a)=="number"){
        if(a%2==0){return true;}
        else{return false;}
    }else{
        return null;
    }
}

function getSum(a,b,c){
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let suma = 0;
    if(a>c&&b>c){suma = a+b;}
    else if(b>a&&c>a){suma = b+c;}
    else{suma = a+c;}
    return suma;
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}