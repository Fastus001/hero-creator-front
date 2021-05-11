import {Injectable} from '@angular/core';
import {Hero} from '../domain/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public hero: Hero;

  constructor() { }

  public setRace(race: string): void{
    this.hero.race.name = race;
    console.log(this.hero);
  }

}
