import { PersonBuilder } from './PersonBuilder';

export class PersonDirector {
  private personBuilder: PersonBuilder;

  constructor(personBuilder: PersonBuilder) {
    this.personBuilder = personBuilder;
  }

  public drawPerson() {
    this.personBuilder.drawHead();
    this.personBuilder.drawArms();
    this.personBuilder.drawFeet();
  }
}
