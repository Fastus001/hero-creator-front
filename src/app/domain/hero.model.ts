import {Race} from '../components/race/race.model';
import {Profession} from './Profession';
import {Skill} from './Skill';
import {Talent} from './Talent';
import {BaseStat} from './base-stat.model';

export class Hero {
  name: string;
  race: Race;
  stats: BaseStat[];
  profession: Profession;
  knownSkills: Skill[];
  knownTalents: Talent[];
  expansions: number[];
}
