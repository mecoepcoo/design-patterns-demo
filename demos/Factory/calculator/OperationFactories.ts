import { IFactory } from './IFactory';
import { Operation } from './Operation';
import { OperationAdd, OperationSub, OperationMul, OperationDiv } from './Operations';

export class AddFactory implements IFactory {
  createOperation(): Operation {
    return new OperationAdd();
  }
}

export class SubFactory implements IFactory {
  createOperation(): Operation {
    return new OperationSub();
  }
}

export class MulFactory implements IFactory {
  createOperation(): Operation {
    return new OperationMul();
  }
}

export class DivFactory implements IFactory {
  createOperation(): Operation {
    return new OperationDiv();
  }
}
