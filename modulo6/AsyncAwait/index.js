// forma mais clean de eficiente de executar promisses

async function handleClick() {
  throw "erros";
  return "error";
}

// com await

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
}

async function handleClick() {
  await sleep(5000);
  return "batata";
}

//await so esta disponivel dentro de async functions, ele espera para devolver o retorno quando for finalizado o await que esta dentro da function
