import { Student, IStudent } from '../entities/student';
import { ISubject, Subject } from '../entities/subject';
import { IStudentData, ISubjectData } from '../entities/data';

export function convertStudentDataToObjects(students: IStudentData[]): Student[] {
  const newStudents: Student[] = students.map(student => {
    const newStudent: IStudent = {
      id: student.Id,
      name: student.Name,
      lastName: student['Last name'],
      address: student.Address,
      description: student.Description,
      marks:  student.Marks
    };
    return new Student(newStudent);
  });
  return newStudents;
}

export function convertSubjectDataToObjects(subjects: ISubjectData[]): Subject[] {
  const newSubjects: Subject[] = subjects.map(subject => {
    const newSubject: ISubject = {
      id: subject.Id,
      name: subject.Name,
      room: subject.Room,
      teacher: subject.Teacher,
      description: subject.Description,
      dates:  subject.Dates
    };
    return new Subject(newSubject);
  });
  return newSubjects;
}
