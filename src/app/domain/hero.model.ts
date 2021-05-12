import {Profession} from './profession';
import {Skill} from './skill';
import {Talent} from './talent';
import {BaseStat} from './base-stat.model';
import {Race} from '../components/chooser/race.model';

export class Hero {
  public name: string;
  public race: Race;
  public stats: BaseStat[];
  public profession: Profession;
  public knownSkills: Skill[];
  public knownTalents: Talent[];
}
