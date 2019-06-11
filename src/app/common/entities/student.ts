import { genId } from '../helpers/generateId';

export class Student {
  Id: string;
  Name: string;
  'Last name': string;
  Address: string;
  Description: string;
  Marks: object;

  constructor(Name: string, Surname: string,  Address: string = '', Description: string = '', Marks = {}) {
    this.Id =  genId();
    this.Name = Name;
    this['Last name'] = Surname;
    this.Address = Address;
    this.Description = Description;
    this.Marks = Marks;
  }
}
