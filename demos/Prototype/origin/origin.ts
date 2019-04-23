class Origin {
  name: string;
}

let ori = new Origin();
ori.name = 'xiaoming';

// 利用js本身的原型链创建新对象
let cloneOri = Object.create(ori);
console.log(ori.name, cloneOri.name);
cloneOri.name = 'laoming';
console.log(ori.name, cloneOri.name);
