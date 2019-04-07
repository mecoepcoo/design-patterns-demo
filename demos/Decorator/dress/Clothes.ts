import { Person } from './Person';

export class Clothes extends Person {
  protected component: Person = null;

  decorate(component: Person) {
    this.component = component;
  }

  show() {
    if (this.component != null) {
      this.component.show();
    }
  }
}
