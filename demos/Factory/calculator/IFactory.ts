import { Operation } from './Operation';

export interface IFactory {
  createOperation(): Operation;
}
