import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD

=======
  getAll(): Observable<any>{
    return this.http.get(environment.api_url + `users`)
  }
>>>>>>> 409e397f956810c99a31dcfbab7ca4e11fe95302
  getById(id:any): Observable<any> {
    return this.http.get(environment.api_url + `users/${id}/detail`);
  }
  updateUser(id: any, data: string): Observable<any>{
    return this.http.put(environment.api_url + `users/${id}/update`, data);
  }
}
