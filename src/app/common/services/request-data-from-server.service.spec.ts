import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { RequestDataFromServerService } from './request-data-from-server.service';

describe('RequestDataFromServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: RequestDataFromServerService = TestBed.get(RequestDataFromServerService) as RequestDataFromServerService;
    expect(service).toBeTruthy();
  });
});
