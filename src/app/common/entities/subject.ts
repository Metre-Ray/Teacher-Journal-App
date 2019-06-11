import { genId } from '../helpers/generateId';


export class Subject {
  Id: string;
  Name: string;
  TeacherName: string;
  TeacherSurname: string;
  Room: number | string;
  Description: string;
  Dates: string[];

  constructor(Name: string, Teacher: string,  Room: number | string, Description: string = '', Dates = []) {
    this.Id =  genId();
    const temp = Teacher.trim().split(' ');
    if (temp.length === 1) {
      this.TeacherSurname = temp[0];
      this.TeacherName = '';
    } else {
      this.TeacherName = temp[0];
      this.TeacherSurname = temp[1];
    }
    this.Name = Name;
    this.Room = Room;
    this.Description = Description;
    this.Dates = Dates;
  }
}
