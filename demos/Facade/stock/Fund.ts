import { FinancialProductA, FinancialProductB } from './Stock';

export default class Fund {
  stock1: FinancialProductA;
  stock2: FinancialProductB;
  
  constructor() {
    this.stock1 = new FinancialProductA();
    this.stock2 = new FinancialProductB();
  }

  public buy(): void {
    this.stock1.buy();
    this.stock2.buy();
  }

  public sell(): void {
    this.stock1.sell();
    this.stock2.sell();
  }
}
