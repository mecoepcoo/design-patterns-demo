/* 抽象算法类，定义所有支持的算法的公共接口 */
export abstract class SaleSuper {
  abstract getPayPrice(price: number): number;
}
