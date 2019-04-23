import { Resume } from './Resume';

let resume = new Resume('xiaoming');
resume.setPersonalInfo('male', 22);
resume.setCompany('B');

let cloneResume1 = resume.clone();
let cloneResume2 = resume.clone();

cloneResume1.setCompany('A');
cloneResume2.setCompany('T');

resume.print();
cloneResume1.print();
cloneResume2.print();
