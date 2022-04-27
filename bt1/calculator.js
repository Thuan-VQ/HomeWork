let Pi = 3.14;

function sum (a,b){
    let result = a + b;
    return console.log(result);
};

export function calculateRectArea(a, b){
    let S = a * b;
    return console.log(S);
};

export function calculateCircleArea(r){
    let S = r * Pi;
    return console.log(S);
};

let info = {
    name: "Casio fx 580",
    country: "USA",
    producer: "Casio",
    year: 2021,
};

export default function name(){
    console.log(info.name);
}