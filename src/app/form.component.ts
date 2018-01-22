import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
     ngOnInit() {}
     abc=true;
     showdiv(){
         this.abc=false;
     }
     
     cancelbtn(){
         this.abc=true;
     }
     routercontent=[];
  constructor(private router: Router) { }

  detailsofformtable=[
        {'id':1, 'fname':'Anvi' ,'lname':'aso','sub':23},
        {'id':2, 'fname':'suhu' ,'lname':'cs','sub':24},
        {'id':3, 'fname':'nimi' ,'lname':'cs','sub':25},
        {'id':4, 'fname':'dixi' ,'lname':'cs','sub':23}
        ];

addtotable(id,fname,lname,sub)
{
let fcontact= {
    "id": id,
    "fname": fname,
    "lname": lname,
    "sub" : sub  }
    this.detailsofformtable.push(fcontact);
    this.routercontent.push(fcontact);
    
}
// MyData(){
//  this.router.navigate(['/']);
// }
}