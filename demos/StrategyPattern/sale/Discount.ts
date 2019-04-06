/* 直接打折策略 */
import { SaleSuper } from './SaleSuper';

export class Discount extends SaleSuper {
  rate = 1;

  constructor(rate: number) {
    super();
    this.rate = rate;
  }

  getPayPrice(price: number) {
    return price * this.rate;
  }
}

