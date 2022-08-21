import { TestBed } from '@angular/core/testing';

import { PhotoBoardService } from './photo-board.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

const mockData = {
  api: 'http://localhost:3000/photos',
  data: [
    {
      id: 1,
      description: 'example 1',
      src: ''
    },
    {
      id: 2,
      description: 'example 2',
      src: ''
    }
  ]
}

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService;
  let httpControler: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService],
    });
    service = TestBed.inject(PhotoBoardService);
    httpControler = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpControler.verify())

  it(`#${PhotoBoardService.prototype.getPhotos.name} should return photos with description in uppercase.`, done => {
    service.getPhotos().subscribe(photos => {
      expect(photos[0].description).toBe('EXAMPLE 1');
      expect(photos[1].description).toBe('EXAMPLE 2');
      done();
    })
    httpControler.expectOne(mockData.api).flush(mockData.data);
  });
});
