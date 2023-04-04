let min = 1;
let max = 7;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let result1 = getRandomArbitrary(min, max);

document.getElementById("int1").innerHTML=result1;

let result2 = getRandomArbitrary(min, max);

document.getElementById("int2").innerHTML=result2;