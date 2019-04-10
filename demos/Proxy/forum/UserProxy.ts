import { UserInterface } from './UserInterface';
import { User } from './User';

export class UserProxy extends UserInterface {
  user: User

  constructor() {
    super();
    this.user = new User();
  }

  setName(name: string) {
    this.user.setName(name);
  }

  post() {
    this.user.post();
  }
}
