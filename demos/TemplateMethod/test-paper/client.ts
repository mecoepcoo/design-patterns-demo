import { TestPaper1, TestPaper2 } from './TestPaper';
import TemplatePaper from './TemplatePaper';

let studentA: TemplatePaper = new TestPaper1();
studentA.doTest1();
studentA.doTest2();

let studentB: TemplatePaper = new TestPaper2();
studentB.doTest1();
studentB.doTest2();
