//classe e construtor, metodo sempre inicializado

class Animal {
  sex;

  constructor(props) {
    this.sex = props.sex;
  }
}

//herança
class Human extends Animal {
  name;
  age;

  constructor(props) {
    super(props);

    this.name = props.name;
    this.age = props.age;
  }
}

const person = new Human({
  name: "caio",
  age: 23,
  sex: "male",
});

console.log(person);
