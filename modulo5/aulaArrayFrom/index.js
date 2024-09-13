// metodo que transforma listas em listas tipo arrays, iteraveis

function namesLists() {
  //   const argumentsArrayTransform = Array.from(arguments);

  Array.from(arguments).forEach((element) => {
    console.log("Meu nome é: " + element);
  });
}

const callFunction = namesLists("caio", "thayna", "zenzinho");
