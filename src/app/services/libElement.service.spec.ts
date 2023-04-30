import { TestBed } from '@angular/core/testing';

import {LibElementService} from "./libElement.service";

describe('libElementService', () => {
  let service: LibElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
