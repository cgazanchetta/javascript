// desestruturação arrays

const fruits = ["banana", "morango", "manga"];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit, secondFruit, thirdFruit);

//--------------------------------------------------------------------//

const employeeUm = {
  name: "caio",
  age: 23,
};

const employeeDois = {
  name: "thayná",
  age: 28,
};

const employeeTres = {
  name: "zen",
  age: 2,
};

const employees = [employeeUm, employeeDois, employeeTres];

const [, { name }] = employees;

console.log(name);
