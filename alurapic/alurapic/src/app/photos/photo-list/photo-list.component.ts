import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photos } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  filter: any = '';
  photos: Photos = [];
  hasMore: boolean = true;
  userName: string = 'flavio';
  currentPage: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PhotoService
  ) {}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  load() {
    this.service.listFromUserPaginate(this.userName, ++this.currentPage).subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore = false;
    });
  }
}
