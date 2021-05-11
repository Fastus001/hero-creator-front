import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Race} from './race.model';
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

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getRaces().subscribe((r) => {
      this.races = r;
    });
  }

  onChangeRace(race: { value: Race; }): void {
    this.race = race.value;
    const sex = this.model.controls.sex.value;
    if ( sex != null){
      this.httpService.getProfessionsByLvlAndSex(1, sex, this.race.name).subscribe((p) => {
        this.professions = p;
      });
    }
  }

  onSexChange(): void {
    const sex = this.model.controls.sex.value;
    if ( this.race != null){
      this.httpService.getProfessionsByLvlAndSex(1, sex, this.race.name).subscribe((p) => {
        this.professions = p;
      });
    }
  }
}
