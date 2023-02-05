import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICharacter } from '../models/character.model';
import { HttpResult } from '../models/http-result.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  baseUrl = environment.basesUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<HttpResult> {
    return this.http.get<HttpResult>(`${this.baseUrl}/character`);
  }

  getById(id: number): Observable<ICharacter> {
    return this.http.get<ICharacter>(`${this.baseUrl}/character/${id}`);
  }
}
