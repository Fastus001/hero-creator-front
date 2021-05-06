import {Race} from './Race';
import {Profession} from './Profession';
import {Skill} from './Skill';
import {Talent} from './Talent';

export interface Hero {
  name: string;
  race: Race;
  profession: Profession;
  knownSkills: Skill[];
  knownTalents: Talent[];
  expansions: number[];
}
