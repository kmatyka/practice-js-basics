const arr = createArray(10, 200);
console.log(arr);

const largest = getLargest(arr);
console.log(largest); 

const avg = getAvg(arr);
console.log(avg); //3


function createArray(min,max){
    let arr = [];
    for(let i=0;i<20;i++){
        liczba = Math.round((Math.random() * (max - min)) + min);
        arr.push(liczba);
    }
    return arr;
}
function getLargest(arr){
    return arr.sort(function(a, b) {
        return b - a;
      }).slice(10);
}
function getAvg(arr){
    let suma = 0;
    arr.forEach(element => {
        suma += element;
    });
    return (suma/arr.length);
}