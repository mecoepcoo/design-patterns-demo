import TemplatePaper from './TemplatePaper';

export class TestPaper1 extends TemplatePaper {
  doTest1() {
    console.log('a');
  }
  doTest2() {
    console.log('b');
  }
}

export class TestPaper2 extends TemplatePaper {
  doTest1() {
    console.log('b');
  }
  doTest2() {
    console.log('b');
  }
}
