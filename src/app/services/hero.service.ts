import {Injectable} from '@angular/core';
import {Hero} from '../domain/hero.model';
import {Race} from '../components/race/race.model';
import {BaseStat} from '../domain/base-stat.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public statNames = ['WW', 'US', 'S', 'WT', 'I', 'ZW', 'ZR', 'INT', 'SW', 'OGD'];
  public hero: Hero = new Hero();

  constructor() { }

  public setRace(race: Race): void{
    this.hero.race = race;
    console.log(this.hero);
    for ( let i = 0; 10; i++){
      console.log(new BaseStat(this.statNames[i], this.hero.race.stats[i], 0));
    }
  }

}
