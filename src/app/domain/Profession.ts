import {Skill} from './Skill';
import {Talent} from './Talent';

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
