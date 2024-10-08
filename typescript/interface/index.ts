// interfaces tem um padrao parecido com o type, porem com alguns beneficios

import { ContaCorrente } from "./interfaces";

// extends duas interfaces

interface Sex {
  sex: "male" | "female";
}

interface Human extends Sex {
  isAlive: boolean;
}

// trazendo interface por import
const conta: ContaCorrente = {
  cpf: "44455566678",
  accountNumber: 99822,
};

// interfaces vindo do meu namespace

const funcionario: Company.WithContact = {
  name: "caio",
  age: 23,
  contacts: [],
};
