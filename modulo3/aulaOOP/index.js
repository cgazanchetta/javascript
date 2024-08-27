//prototype => acessar metodos e injetar as informações na minha entidade

class Animal {
  sex;
  name = "dog";

  constructor(props) {
    this.sex = props.sex;
  }
}

//injetando metodo dentro da classe com o prototype, por fora da classe
Animal.prototype.changeName = function () {
  this.name = "cat";
};

//instanciando a classe com os parametros do constructor
const person = new Animal({
  sex: "male",
});

//executando o metodo que foi injetado por fora da classe ( necessario chamar depois do uso do prototype, pois antes ele nao existe ainda no contexto)
person.changeName();
console.log(person);

// observação: prototype deve ser utilizado apenas em situações especificas, evitar injetar coisas por fora do objeto
