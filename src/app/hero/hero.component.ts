import {Component, OnInit} from '@angular/core';
import {Hero} from '../domain/hero.model';
import {HeroService} from '../services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.newHero.subscribe((hero) => {
      this.hero = hero;
    });
  }

}
