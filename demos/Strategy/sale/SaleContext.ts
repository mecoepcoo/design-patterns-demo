/* 上下文，维护对一个saleSuper的引用 */
import { SaleSuper } from './SaleSuper';
import { Coupon } from './Coupon';
import { Discount } from './Discount';

export class SaleContext {
  private saleSuper: SaleSuper = null;

  constructor(type: string) {
    switch (type) {
      case '满99减50': 
        this.saleSuper = new Coupon(99, 50);
        break;
      case '7折':
        this.saleSuper = new Discount(0.7);
        break;
    }
  }

  getResult(price: number): number {
    return this.saleSuper.getPayPrice(price);
  }
}
