import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Race} from '../../domain/Race';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  public races: Race[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.loadRaces().subscribe((r) => {
      this.races = r;
    });
  }

}
