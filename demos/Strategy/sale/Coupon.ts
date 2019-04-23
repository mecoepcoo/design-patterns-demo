/* 满减优惠券策略 */
import { SaleSuper } from './SaleSuper';

export class Coupon extends SaleSuper {
  full: number; // 满多少
  off: number; // 减多少

  constructor(full: number, off: number) {
    super();
    this.full = full;
    this.off = off;
  }

  getPayPrice(price: any) {
    return price - Math.floor(price / this.full) * this.off;
  }
}
