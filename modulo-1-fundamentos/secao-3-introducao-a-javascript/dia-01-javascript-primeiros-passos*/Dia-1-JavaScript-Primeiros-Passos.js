// Variáveis e constantes

const myName = "Amanda Jesus"
const birthCity = "SPA"
let birthYear = 1992

console.log(myName)
console.log(birthCity)
console.log(birthYear)

// typeof
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId)
console.log(typeof isEnrolled)
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof patientInfo)
console.log(typeof patientEmail)

// Operações aritméticas

let base = 5
let heigth = 8
let area = base * heigth
let perimeter = 2 * (base + heigth)

console.log (area)
console.log (perimeter)
console.log (area, perimeter)

// if/else

const note = 77

if (note >= 80) {console.log ("Parabéns, você faz parte do grupo das pessoas aprovadas!")}
else if (note >= 60 && note < 80) {console.log ("Você está na nossa lista de espera")}
else {console.log ("Infelizmente, você reprovou.")}

// Operadores lógicos &&(and) ||(or) !(not)




// Switch e Case

let aprovados = "reprovada";
switch (aprovados){
    case "aprovada": console.log ("Parabéns, você foi aprovada(o)!"); break;
    case "lista": console.log ("Você está na nossa lista de espera"); break;
    case "reprovada": console.log ("Você foi reprovada(o)"); break;
}