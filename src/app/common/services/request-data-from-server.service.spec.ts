import { TestBed } from '@angular/core/testing';

import { RequestDataFromServerService } from './request-data-from-server.service';

describe('RequestDataFromServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestDataFromServerService = TestBed.get(RequestDataFromServerService);
    expect(service).toBeTruthy();
  });
});
