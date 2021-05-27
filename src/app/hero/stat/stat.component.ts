import {Component, Input, OnInit} from '@angular/core';
import {BaseStat} from '../../domain/base-stat.model';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  @Input() stat: BaseStat;

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

  sum(): number {
    console.log(this.stat.stat);
    console.log(this.stat.expansion);
    return +this.stat.stat + +this.stat.expansion;
  }
}
