// encadear ações dentro da promise
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

//retorna o valor de retorno da chamada
