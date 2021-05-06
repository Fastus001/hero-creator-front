import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Race} from '../domain/Race';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  loadRaces(): Observable<Race[]>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Accept', 'application/json');
    return this.http.get<Race[]>('http://localhost:8080/races', {headers: httpHeaders});
  }
}
