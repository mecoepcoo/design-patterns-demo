import { OperationAdd, OperationSub, OperationMul, OperationDiv } from './Operations';

export class OperatorFactory {
  static createOperator(operator: string) {
    let op = null;
    switch (operator) {
      case '+':
        op = new OperationAdd();
        break;
      case '-':
        op = new OperationSub();
        break;
      case '*':
        op = new OperationMul();
        break;
      case '/':
        op = new OperationDiv();
        break;
    }
    return op;
  }
}
