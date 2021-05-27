import {Component, OnInit} from '@angular/core';
import {BaseStat} from '../../domain/base-stat.model';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  stat: BaseStat = new BaseStat('WW', 25, 10);

  constructor() { }

  ngOnInit(): void {
  }

  addOne(): void {
    this.stat.expansion++;
  }

  subtractOne(): void {
    if (this.stat.expansion > 0){
      this.stat.expansion--;
    }
  }
}
