import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(environment.api_url + `songs`)
  }
  getById(id:any): Observable<any> {
    return this.http.get(environment.api_url + `songs/${id}/detail`);
  }

  getTopView(): Observable<any> {
    return this.http.get(environment.api_url + `songs/topview`);
  }
  getTopLike(): Observable<any> {
    return this.http.get(environment.api_url + `songs/toplike`);
  }
  getTopNew(): Observable<any> {
    return this.http.get(environment.api_url + `songs/topview`);
  }

  getSongBySinger(id:any): Observable<any>{
    return this.http.get(environment.api_url + `songs/${id}/singer`)
  }

  getSongByCategory(id:any): Observable<any>{
    return this.http.get(environment.api_url + `songs/${id}/category`)
  }

  songCreate(data: any): Observable<any>{
    return this.http.post(environment.api_url + `songs/create`, data);
  }
  searchSong(keyword: string): Observable<any>{
    return this.http.get(environment.api_url + `songs/${keyword}` )
  }
  destroy(id: any): Observable<any>{
    return this.http.delete(environment.api_url + `songs/${id}/delete`);
  }
}
