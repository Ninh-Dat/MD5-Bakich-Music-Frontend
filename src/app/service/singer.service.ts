import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SingerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(environment.api_url + `singers`)
  }
  getById(id:any): Observable<any> {
    return this.http.get(environment.api_url + `singers/${id}/detail`);
  }

  createSinger(data: any): Observable<any> {
    return this.http.post(environment.api_url + `singers/create`, data);
  }
  searchSinger(keyword: string): Observable<any>{
    return this.http.get(environment.api_url + `singers/${keyword}` )
  }
  destroy(id: any): Observable<any>{
    return this.http.delete(environment.api_url + `singers/${id}/update`);
  }

  updateSinger(id: any, data: any): Observable<any> {
    return this.http.put(environment.api_url + `singers/${id}/update`, data);
  }

}
