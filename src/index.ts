class SaySomething {
  greet: string;
  name: string;

  constructor(greet: string, name: string) {
    this.greet = greet;
    this.name = name;
  }
}

const sayHello = new SaySomething('Hello', 'Onyangkopon');

console.log(sayHello.name);
