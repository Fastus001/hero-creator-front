import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profession} from '../domain/profession';
import {tap} from 'rxjs/operators';
import {Race} from '../components/chooser/race.model';

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

  getProfessionsByLvlAndSex(lvl: number, sex: boolean, race: string): Observable<Profession[]>{
    return this.http.get<Profession[]>('http://localhost:8080/api/professions/' + lvl + '/' + sex + '/' + race)
      .pipe(tap(console.log));
  }
}
