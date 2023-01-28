import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  basesUrl: string = environment.basesUrl;

  constructor(private http: HttpClient) { }

  public getAllCharacter(): Observable<any> {
    return this.http.get(`${this.basesUrl}/character`);
  }
}
