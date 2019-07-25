import { IMark } from './mark';

export interface IStudent {
  id: string;
  name: string;
  lastName: string;
  address: string;
  description: string;
  marks: IMark;
}

export class Student implements IStudent {
  public id: string;
  public name: string;
  public lastName: string;
  public address: string;
  public description: string;
  public marks: IMark;

  constructor(obj: IStudent) {
    return {...this, ...obj};
  }
}
