import {Skill} from '../../domain/Skill';
import {Talent} from '../../domain/Talent';

export interface Race {
  id?: number;
  name: string;
  skills: Skill[];
  talents: Talent[];
  freeTalents: number;
  stats: number[];
}
