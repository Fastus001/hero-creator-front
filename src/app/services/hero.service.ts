import {Injectable} from '@angular/core';
import {Hero} from '../domain/hero.model';
import {BaseStat} from '../domain/base-stat.model';
import {Race} from '../components/chooser/race.model';
import {Profession} from '../domain/profession';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public statNames = ['WW', 'US', 'S', 'WT', 'I', 'ZW', 'ZR', 'INT', 'SW', 'OGD'];
  public hero: Hero = new Hero();

  constructor() { }

  public setRace(race: Race): void{
    this.hero.race = race;
    const statistics: BaseStat[] = [];
    for ( let i = 0; i < this.statNames.length; i++){
      statistics.push(new BaseStat(this.statNames[i], this.hero.race.stats[i], 0));
    }
    this.hero.stats = statistics;
    console.log(this.hero);
  }

  setProfession(profession: Profession): void {
    this.hero.profession = profession;
  }
}
