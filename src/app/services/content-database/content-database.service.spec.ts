import { TestBed } from '@angular/core/testing';

import { ContentDatabaseService } from './content-database.service';

describe('ContentDatabaseService', () => {
  let service: ContentDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
