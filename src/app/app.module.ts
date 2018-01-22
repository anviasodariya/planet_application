import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { PlanetComponent } from './planet.component';
import {HttpClientModule} from '@angular/common/http';
import { PlanetdetailsComponent } from './planetdetails/planetdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PlanetdetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     RouterModule.forRoot([
    { path: 'planet', component: PlanetComponent },
     { path: 'planetdetail/:name', component: PlanetdetailsComponent }
  ])  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
