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
  {name :"مسعود اوزيل",
    place:"18 نهج مسعود اوزيل اريانة",
    phone:"+216 21886565",
    subject:"التقصي من صحة صرف منحة كفالة اليتامى",
    info:"التقصي من صحة صرف منحة كفالة اليتامى",
  },
  {name :"مسعود اوزيل",
    place:"18 نهج مسعود اوزيل اريانة",
    phone:"+216 21886565",
    subject:"التقصي من صحة صرف منحة كفالة اليتامى",
    info:"التقصي من صحة صرف منحة كفالة اليتامى",
  },{name :"مسعود اوزيل",
  place:"18 نهج مسعود اوزيل اريانة",
  phone:"+216 21886565",
  subject:"التقصي من صحة صرف منحة كفالة اليتامى",
  info:"التقصي من صحة صرف منحة كفالة اليتامى",
},
]
@Component({
  selector: 'app-infop',
  templateUrl: './infop.component.html',
  styleUrls: ['./infop.component.scss']
})
export class InfopComponent implements OnInit {
  colums:String[]=["action","place","phone","info","subject","name"]
  data=new MatTableDataSource<pperson>(dataa)
  @ViewChild(MatPaginator, { static: true }) pagi: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.data.paginator=this.pagi
  }

}
