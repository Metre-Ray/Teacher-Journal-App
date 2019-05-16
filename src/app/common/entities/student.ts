import { genId } from '../helpers/generateId';

export class Student {
  Id: string;
  Index: number;
  Name: string;
  'Last name': string;
  Address: string;
  Description: string;
  Marks: object;

  constructor(Name: string, Surname: string,  Address: string = '', Description: string = '', Marks = {}, Index: number = 5) {
    this.Id =  genId();
    this.Index = Index;
    this.Name = Name;
    this['Last name'] = Surname;
    this.Address = Address;
    this.Description = Description;
    this.Marks = Marks;
  }
}
