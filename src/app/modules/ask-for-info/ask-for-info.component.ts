import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface pperson{
  name :string;
  place:string;
  phone:string;
  subject:string;
  info:string;
}
const dataa:pperson[]=[
  {name :"جمعية بسمة",
    place:"18 نهج مسعود اوزيل اريانة",
    phone:"+216 30303030",
    subject:"التقصي من صحة صرف منحة كفالة اليتامى",
    info:"التقصي من صحة صرف منحة كفالة اليتامى",
  },
  {name :"جمعية بسمة",
    place:"18 نهج مسعود اوزيل اريانة",
    phone:"+216 30303030",
    subject:"التقصي من صحة صرف منحة كفالة اليتامى",
    info:"التقصي من صحة صرف منحة كفالة اليتامى",
  },{name :"جمعية بسمة",
  place:"18 نهج مسعود اوزيل اريانة",
  phone:"+216 30303030",
  subject:"التقصي من صحة صرف منحة كفالة اليتامى",
  info:"التقصي من صحة صرف منحة كفالة اليتامى",
},
]




@Component({
  selector: 'app-ask-for-info',
  templateUrl: './ask-for-info.component.html',
  styleUrls: ['./ask-for-info.component.scss']
})
export class AskForInfoComponent implements OnInit {
  colums:String[]=["action","name","place","phone","subject","info"]
  data=new MatTableDataSource<pperson>(dataa)
  
  
 
  @ViewChild(MatPaginator, { static: true }) pagi: MatPaginator;

  constructor( ) {}

  ngOnInit() {
    
    this.data.paginator=this.pagi;
  }

}
