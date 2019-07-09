export interface ISubject {
  id: string;
  name: string;
  teacher: string;
  room: number | string;
  description: string;
  dates: string[];
}

export class Subject implements ISubject {
  public id: string;
  public name: string;
  public teacher: string;
  public room: number | string;
  public description: string;
  public dates: string[];

  constructor(subject: ISubject) {
    return {...this, ...subject};
  }
}
