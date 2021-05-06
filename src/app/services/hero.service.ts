import {Injectable} from '@angular/core';
import {Hero} from '../domain/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public hero: Hero;

  constructor() { }
}
