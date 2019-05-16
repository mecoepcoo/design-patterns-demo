import { PersonDirector } from './PersonDirector';
import { PersonThinBuilder } from './PersonThinBuilder';
import { PersonFatBuilder } from './PersonFatBuilder';

let personThinBuilder = new PersonThinBuilder();
let personThinDirector = new PersonDirector(personThinBuilder);
personThinDirector.drawPerson();

let personFatBuilder = new PersonFatBuilder();
let personFatDirector = new PersonDirector(personFatBuilder);
personFatDirector.drawPerson();
