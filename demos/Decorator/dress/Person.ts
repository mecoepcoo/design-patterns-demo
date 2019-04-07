export class Person {
  private readonly name: string;

  constructor(name: string = '') {
    this.name = name;
  }

  show() {
    console.log(this.name);
  }
}
