import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-planetdetails',
  templateUrl: './planetdetails.component.html',
  styleUrls: ['./planetdetails.component.css']
})
export class PlanetdetailsComponent implements OnInit {

  planets;i;planet;pname

constructor(private http:HttpClient, private route:ActivatedRoute) { }



  ngOnInit() {
  	this.http.get('/assets/planets.json').subscribe(data =>{
this.planets=data;
this.pname=this.route.snapshot.params['name'];
console.log(this.pname)
for (this.i=0; this.i<9; this.i++){
if(this.planets[this.i]['name']==this.pname){
this.planet=this.planets[this.i];
console.log(this.planets[this.i]);
}
}
});
}
  }


