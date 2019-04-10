import { UserInterface } from './UserInterface';

export class User extends UserInterface {
  private _name: string;
  private _code: string;

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  setName(name: string) {
    this._name = name;
  }

  post() {
    console.log(`${this.name} 发布了文章`);
  }
}
