interface Cloneable<T> {
  clone(): T;
}

export class Resume implements Cloneable<Resume> {
  private name: string;
  private age: number;
  private sex: string;
  private company: string;

  constructor (name: string) {
    this.name = name;
  }

  public setPersonalInfo(sex: string, age: number) {
    this.sex = sex;
    this.age = age;
  }

  public setCompany(company: string) {
    this.company = company;
  }

  public print() {
    console.log(this.name, this.age, this.sex, this.company);
  }

  public clone(): Resume {
    let target = new Resume(this.name);
    target.sex = this.sex;
    target.age = this.age;
    return target;
  }
}
