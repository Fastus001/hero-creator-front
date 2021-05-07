import {Component, Input, OnInit} from '@angular/core';
import {Race} from '../../../domain/Race';

@Component({
  selector: 'app-show-race',
  templateUrl: './show-race.component.html',
  styleUrls: ['./show-race.component.css']
})
export class ShowRaceComponent implements OnInit {

  @Input() race: Race;
  public statNames = ['WW', 'US', 'S', 'WT', 'I', 'ZW', 'ZR', 'INT', 'SW', 'OGD'];

  constructor() { }

  ngOnInit(): void {
  }

}
