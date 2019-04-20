import { AddFactory } from './OperationFactories';

let operationFactory = new AddFactory();
let operation = operationFactory.createOperation();

operation.x = 1;
operation.y = 2;

let result = operation.getResult();
console.log(result);
