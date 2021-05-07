import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Race} from '../../domain/Race';
import {HeroService} from '../../services/hero.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  public races: Race[];
  model: FormGroup = new FormGroup({
    raceForm: new FormControl(),
    sex: new FormControl()
  });

  constructor(private httpService: HttpService, private hero: HeroService) { }

  ngOnInit(): void {
    this.httpService.getRaces().subscribe((r) => {
      this.races = r;
    });
  }

  log() {
    console.log(this.model.controls.raceForm.value);
    console.log(this.model.controls.sex.value);
  }
}
