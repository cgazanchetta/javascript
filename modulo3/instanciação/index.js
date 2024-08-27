class Humano {
  hungry = false;

  eat() {
    this.hungry = true;
  }
}

//com fome
const person = new Humano();
person.eat();

//sem fome
const person2 = new Humano();

console.log(person);
console.log(person2);
