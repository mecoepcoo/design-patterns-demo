import { Operation } from './Operation';

export class OperationAdd extends Operation {
  getResult() {
    let result = this.x + this.y;
    return result;
  }
}

export class OperationSub extends Operation {
  getResult() {
    let result = this.x - this.y;
    return result;
  }
}

export class OperationMul extends Operation {
  getResult() {
    let result = this.x * this.y;
    return result;
  }
}

export class OperationDiv extends Operation {
  getResult() {
    if (this.y === 0) throw new Error('除数不能为0');
    let result = this.x / this.y;
    return result;
  }
}
