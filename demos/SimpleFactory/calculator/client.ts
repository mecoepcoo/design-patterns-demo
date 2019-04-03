import { OperatorFactory } from './OperationFactory';

let calculator = OperatorFactory.createOperator('+');
calculator.x = 1;
calculator.y = 2;
let result = calculator.getResult();
console.log(result);
