import { PersonBuilder } from './PersonBuilder';

export class PersonThinBuilder extends PersonBuilder {
  public drawHead() {
    console.log('draw head thin');
  }

  public drawArms() {
    console.log('draw arms thin');
  }

  public drawFeet() {
    console.log('draw feet thin');
  }
}
