import { buildPhotoList } from 'src/app/shared/components/photo-board/build-photo-list';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Photo } from '../interfaces/photo';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {

  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
