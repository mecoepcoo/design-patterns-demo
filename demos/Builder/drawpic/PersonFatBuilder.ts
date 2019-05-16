import { PersonBuilder } from './PersonBuilder';

export class PersonFatBuilder extends PersonBuilder {
  public drawHead() {
    console.log('draw head fat');
  }

  public drawArms() {
    console.log('draw arms fat');
  }

  public drawFeet() {
    console.log('draw feet fat');
  }
}
