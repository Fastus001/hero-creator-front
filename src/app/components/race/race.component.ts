import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Race} from '../../domain/Race';
import {HeroService} from '../../services/hero.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Profession} from '../../domain/Profession';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  public races: Race[];
  public professions: Profession[];
  model: FormGroup = new FormGroup({
    raceForm: new FormControl(),
    sex: new FormControl()
  });

  public race: Race;
  public profession: Profession;

  constructor(private httpService: HttpService, private hero: HeroService) { }

  ngOnInit(): void {
    this.httpService.getRaces().subscribe((r) => {
      this.races = r;
    });
  }

  log() {
    this.race = this.model.controls.raceForm.value;
    console.log(this.model.controls.raceForm.value);
    console.log(this.model.controls.sex.value);
  }

  onChange(race: { value: Race; }): void {
    this.race = race.value;
    const sex = this.model.controls.sex.value;
    if ( sex != null){

      this.httpService.getProfessionsByLvlAndSex(1, sex, this.race.name).subscribe((p) => {
        this.professions = p;
      });
    }
  }
}
