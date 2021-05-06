import {Skill} from './Skill';
import {Talent} from './Talent';

export interface Race {
  id?: number;
  name: string;
  skills: Skill[];
  talents: Talent[];
  freeTalents: number;
  stats: number[];
}
