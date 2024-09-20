// promisses funcionam como processos assincronos dentro do js

const minhaPromisse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(234);
    // console.log("teste");
  }, 3000);
});

// geralmente as promisses sao encapsuladas dentro de uma função, justamente para que sejam executadas no momento correto de inicializaçao dos metodos

function handleClick(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("sucesso");
      //   reject("falha");
    }, 3000);
  });
}

//result se "torna" a minha promisse
const result = handleClick()
  .then((res) => {
    console.log("resultado promisse: " + res);
    console.log("finalizado com sucesso");
  })
  .catch((err) => {
    console.log("erro retornado");
    console.log(err);
  });
