const baseUrl = "https://jsonplaceholder.typicode.com";

async function getToDo() {
  const promises = Promise.all([
    fetch(`${baseUrl}/todos/1`).then((response) => response.json()),

    fetch(`${baseUrl}/todos/1`).then((response) => response.json()),

    fetch(`${baseUrl}/todos/1`).then((response) => response.json()),
  ]);

  return promises;
}

const toDo = getToDo();
console.log(toDo);
