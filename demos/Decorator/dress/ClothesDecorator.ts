import { Clothes } from './Clothes';

export class Tshirts extends Clothes {
  show() {
    console.log('T-shirt');
    super.show();
  }
} 

export class Jeans extends Clothes {
  show() {
    console.log('Jean');
    super.show();
  }
}
