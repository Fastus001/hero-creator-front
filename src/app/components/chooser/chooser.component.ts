import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Race} from './race.model';
import {FormControl, FormGroup} from '@angular/forms';
import {Profession} from '../../domain/profession';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-choser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit {
  public races: Race[];
  public professions: Profession[];
  public race: Race;
  public profession: Profession;

  model: FormGroup = new FormGroup({
    raceForm: new FormControl(),
    sex: new FormControl()
  });

  constructor(private httpService: HttpService, private heroService: HeroService) { }

  ngOnInit(): void {
    this.httpService.getRaces().subscribe((races) => {
      this.races = races;
    });
  }

  onChangeRace(race: { value: Race; }): void {
    this.race = race.value;
    const sex = this.model.controls.sex.value;
    if ( sex != null){
      this.getProfessionsBy(sex, this.race.name);
    }
    this.heroService.setRace(this.race);
  }

  onSexChange(): void {
    const sex = this.model.controls.sex.value;
    if ( this.race != null){
      this.getProfessionsBy(sex, this.race.name);
    }
  }

  private getProfessionsBy(sex, name: string): void {
    this.httpService.getProfessionsByLvlAndSex(1, sex, name).subscribe((professions) => {
      this.professions = professions;
    });
  }


  onChangeProfession(prof: {value: Profession}): void  {
    this.profession = prof.value;
    console.log(this.profession);
  }
}
