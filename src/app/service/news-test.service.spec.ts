import { TestBed, inject } from '@angular/core/testing';

import { NewsTestService } from './news-test.service';

describe('NewsTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsTestService]
    });
  });

  it('should be created', inject([NewsTestService], (service: NewsTestService) => {
    expect(service).toBeTruthy();
  }));
});
