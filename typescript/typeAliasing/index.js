"use strict";
// criação de ÁLIAS para as tipagem das variaveis
const cpf = "44455566677";
// assim a variavel do tipo desse enum so pode ter dois valores, male ou female
const sex = "male";
function greet(name) {
    console.log(`
    hello my friend, ${name.toUpperCase()}
    `);
}
greet("caio");
const person = {
    name: "caio",
    age: 23,
    contact: [],
};
const person2 = {
    name: "caio",
    contact: [],
};
// se a variavel tiver ? depois no nome, significa que ela pode ser undefined
