const user = {
  name: "caio",
  age: 23,
};

const newUser = { ...user };

console.log(newUser);

// aplicando novos valores após clonagem de objeto

newUser.name = "Thayná";
newUser.age = 28;

console.log(
  "após a clonagem e alteração de valores: " +
    " novo nome: " +
    newUser.name +
    " nova idade: " +
    newUser.age
);
