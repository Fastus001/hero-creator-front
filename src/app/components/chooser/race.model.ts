import {Skill} from '../../domain/skill';
import {Talent} from '../../domain/talent';

export interface Race {
  id?: number;
  name: string;
  skills: Skill[];
  talents: Talent[];
  freeTalents: number;
  stats: number[];
}
