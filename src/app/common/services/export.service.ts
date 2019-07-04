import { Injectable } from '@angular/core';
import { Student } from '../entities/student';
import { Subject } from '../entities/subject';
import * as XLSX from 'xlsx';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { IRow } from '../entities/excelRow';
import { cloneObject } from '../helpers/deepCopy';

(pdfMake.vfs as pdfMake.TFontFamily) = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  private convertMarksToTablesFormat(students: Student[], subjects: Subject[]): IRow[][] {
    return subjects.map((subject) => {
      return students.map((student) => {
        const row: IRow = {
          subject: subject.name,
          name: student.name,
          surname: student.lastName,
        };
        if (student.marks[subject.name]) {
          Object.keys(student.marks[subject.name]).forEach((date) => {
            row[date] = student.marks[subject.name][date];
          });
        }
        return row;
      });
    });
  }

  private studentsIntoContentForPdf(students: Student[]): string[] {
    const content: string[] = students.map((student) => {
      return [student.name, student.lastName, student.address, student.description, '\n\n'].join('\t');
    });
    return content;
  }

  public exportDataToExcel(data1: Student[], data2?: Subject[]): void {
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    const dataForExcel: Partial<Student>[] = (cloneObject(data1) as  Student[]).map((student) => {
      delete student.id;
      return student;
    });
    const workSheet1: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataForExcel);
    XLSX.utils.book_append_sheet(wb, workSheet1, 'Sheet1');
    if (data2) {
      const marksTablesContent: IRow[][] = this.convertMarksToTablesFormat(data1, data2);
      marksTablesContent.forEach((data, i) => {
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(data), `Sheet${i + 2}`);
      });
    }
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }

  public exportDataToPdf(data: Student[]): void {
    const content: string[] = this.studentsIntoContentForPdf(data);
    const docDefinition: pdfMake.TDocumentDefinitions = {
      content
    };
    pdfMake.createPdf(docDefinition).download();
  }
}
