import {Component, Input, OnInit} from '@angular/core';
import {Profession} from '../../../domain/profession';

@Component({
  selector: 'app-show-profession',
  templateUrl: './show-profession.component.html',
  styleUrls: ['./show-profession.component.css']
})
export class ShowProfessionComponent implements OnInit {
  public statNames = ['WW', 'US', 'S', 'WT', 'I', 'ZW', 'ZR', 'INT', 'SW', 'OGD'];
  @Input() profession: Profession;

  constructor() { }

  ngOnInit(): void {
  }

}
