// exemplo simples spread operator

const parts = ["ombro", "joelho", "pés"];
const corpo = ["boca", ...parts, "nariz"];

//console.log(corpo);

function createUser(name, age, ...contact) {
  return {
    name,
    age,
    contact,
  };
}

const creatingUser = createUser("Caio", 23, "caio1@gmail", "caio2@gmail");
//console.log(creatingUser);

const arrayImutavel = ["caio", "thayná", "zen"];
const arrayMutavel = [...arrayImutavel];
arrayMutavel.push("karina");

// console.log(arrayImutavel);
// console.log(arrayMutavel);
