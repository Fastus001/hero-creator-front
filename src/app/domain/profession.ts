import {Skill} from './skill';
import {Talent} from './talent';

export interface Profession {
  id?: number;
  career: string;
  name: string;
  path: string;
  male: boolean;
  skills: Skill[];
  talents: Talent[];
  availableForRaces: string[];
  stats: number[];
  items: string[];
  level: number;
}
