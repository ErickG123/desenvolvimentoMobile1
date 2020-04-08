import { TestBed } from '@angular/core/testing';

import { TelevisaoService } from './televisao.service';

describe('TelevisaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelevisaoService = TestBed.get(TelevisaoService);
    expect(service).toBeTruthy();
  });
});
