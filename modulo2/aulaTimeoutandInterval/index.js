// quanto tempo quero que demore para executar algo

setTimeout(() => {
  console.log("teste");
}, 5000);

// parecido com o timeout, porem se torna uma rotina, que vai executando a todo momento, durante o intervalo inserido

setInterval(() => {
  console.log("teste");
}, 5000);

// agora um exemplo de um intervalo que executa, e um timeout da o stop depois de algumas execuçoes

const interval = setInterval(() => {
  console.log("teste");
}, 5000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
