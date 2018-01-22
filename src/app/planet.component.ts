import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./app.component.css']
})
export class PlanetComponent {
  title = 'app';
  results: string[];
  world;
  constructor(private http: HttpClient,private router:Router){}

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('/assets/planets.json').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.world=data;
      console.log(this.world);

     // this.results = data['results'];
    });
  }
  planetDetail(planet){
this.router.navigate(['/planetdetail',planet.name])
}
}