import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExportPageComponent } from './export-page.component';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { ExportService } from 'src/app/common/services/export.service';
import { By } from '@angular/platform-browser';

class MockExportService {
  public exportDataToExcel(): void {}
  public exportDataToPdf(): void {}
}

class MockStore {
  public select(): Observable<object> {
    return of({});
  }
}

describe('ExportPageComponent', () => {
  let component: ExportPageComponent;
  let fixture: ComponentFixture<ExportPageComponent>;
  let debugElement: DebugElement;
  let exportS: ExportService;
  let excelSpy: jasmine.Spy;
  let pdfSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportPageComponent ],
      providers: [
        { provide: Store, useClass: MockStore },
        { provide: ExportService, useClass: MockExportService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    exportS = fixture.debugElement.injector.get(ExportService);
    excelSpy = spyOn(exportS, 'exportDataToExcel').and.callThrough();
    pdfSpy = spyOn(exportS, 'exportDataToPdf').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component methods should call export service', () => {
    component.excelExport();
    expect(excelSpy).toHaveBeenCalled();

    component.pdfExport();
    expect(pdfSpy).toHaveBeenCalled();
  });

  it('clicks on elements should call methods of the export service', () => {
    debugElement
      .query(By.css('.mcontainer__export-excel'))
      .triggerEventHandler('click', undefined);
    expect(excelSpy).toHaveBeenCalled();

    debugElement
      .query(By.css('.mcontainer__export-pdf'))
      .triggerEventHandler('click', undefined);
    expect(pdfSpy).toHaveBeenCalled();
  });
});
