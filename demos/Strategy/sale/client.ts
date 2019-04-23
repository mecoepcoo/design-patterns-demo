import { SaleContext } from './SaleContext';

let saleContext = new SaleContext('满99减50');
let payPrice = saleContext.getResult(300);
console.log(payPrice);
