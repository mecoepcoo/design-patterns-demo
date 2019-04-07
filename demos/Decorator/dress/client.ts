import { Person } from './Person';
import { Tshirts, Jeans } from './ClothesDecorator';

let xiaoming = new Person('小明');

let tshirt = new Tshirts();
let jean = new Jeans();

jean.decorate(xiaoming);
tshirt.decorate(jean);
tshirt.show();
