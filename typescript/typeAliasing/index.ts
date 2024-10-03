// criação de ÁLIAS para as tipagem das variaveis

type CPF = String;

const cpf: CPF = "44455566677";

type sexEnum = "male" | "female";

// assim a variavel do tipo desse enum so pode ter dois valores, male ou female

const sex: sexEnum = "male";

function greet(name: string) {
  console.log(`
    hello my friend, ${name.toUpperCase()}
    `);
}

greet("caio");

//tipando varaiveis do objeto

type Person = {
  name: string;
  age?: number;
  contact: string[];
};

const person: Person = {
  name: "caio",
  age: 23,
  contact: [],
};

const person2: Person = {
  name: "caio",
  contact: [],
};

// se a variavel tiver ? depois no nome, significa que ela pode ser undefined
