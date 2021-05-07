import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Race} from '../domain/Race';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getRaces(): Observable<Race[]>{
    return this.http.get<Race[]>('http://localhost:8080/api/races');
  }

  getRacesNames(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:8080/api/races/names');
  }
}
