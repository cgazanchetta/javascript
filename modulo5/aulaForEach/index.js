const fruits = ["banana", "morango", "uva", "maça"];

function eatAllFruits() {
  fruits.forEach((element, index) => {
    const output = `
    Olá, estou comendo as frutas
    acabei de comer a fruta: ${element},
    e ela era o item número ${index} da minha lista de frutas
    `;

    console.log(output);
  });
}

const callFunction = eatAllFruits();
