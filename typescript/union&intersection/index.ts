// UNION

//quando uma variavel possui 2 tipos, e precisa de validaçoes para saber qual tipo sera o que percorrerá o código em determinada execução

type Cpf = string | number;

function findPerson(cpf: Cpf) {
  if (typeof cpf === "string") {
    return cpf.toUpperCase();
  }
  return cpf.toFixed(1);
}

findPerson(123);

// INTERSECTION

// quando um type pode possuir dois types dentro dele

type Animal = { sex: "male" | "female" };

type Alive = { hungry: boolean };

type People = Animal & Alive;

function getPeopleStatus(people: People) {
  return people.hungry || people.sex;
}
