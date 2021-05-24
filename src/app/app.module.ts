import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChooserComponent} from './components/chooser/chooser.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShowRaceComponent} from './components/chooser/show-race/show-race.component';
import {ShowProfessionComponent} from './components/chooser/show-profession/show-profession.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooserComponent,
    ShowRaceComponent,
    ShowProfessionComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
