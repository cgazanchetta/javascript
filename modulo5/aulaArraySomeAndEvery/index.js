const guests = [
  {
    name: "caio",
    age: 23,
  },
  {
    name: "thayna",
    age: 28,
  },
  {
    name: "luana",
    age: 13,
  },
  {
    name: "helena",
    age: 10,
  },
];

// verifica se existe algum convidade maior de idade na festa
const hasAdults = guests.some((guest) => guest.age >= 18);
console.log(hasAdults);

//verifica se todos na lista são maiores de idade

const areAllAdults = guests.every((guest) => guest.age <= 18);
console.log(areAllAdults);
