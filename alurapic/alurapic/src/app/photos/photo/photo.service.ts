import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from './photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string): Observable<Photos> {
    return this.http.get<Photos>(`http://localhost:3000/${userName}/photos`);
  }

  listFromUserPaginate(userName: string, page: number): Observable<Photos> {
    const params = new HttpParams().append('page', page.toString())
    return this.http.get<Photos>(`http://localhost:3000/${userName}/photos`, { params });
  }
}
