export interface IStudent {
  id: string;
  name: string;
  lastName: string;
  address: string;
  description: string;
  marks: object;
}

export class Student implements IStudent {
  public id: string;
  public name: string;
  public lastName: string;
  public address: string;
  public description: string;
  public marks: object;

  constructor(obj: IStudent) {
    return {...this, ...obj};
  }
}
