import { DashboardService } from './../dashboard.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
export interface PeriodicElement {
  date: string;
  position: number;
  about: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 2, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 3, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 4, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 5, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 6, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 7, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 8, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 9, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 10, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 11, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 12, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 13, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 14, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 15, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 16, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 17, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 18, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 19, date: 'جانفي  2022', about: 'الموضوع', },
  {position: 20, date: 'جانفي  2022', about: 'الموضوع', },
];







@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
bigcharts=[];
cards=[];
datapie=[];



displayedColumns: string[] = ['name', 'weight', 'position'];
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);




@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private DashboardService:DashboardService ) {}

  ngOnInit() {
    
    this.bigcharts=this.DashboardService.bigchart();
    this.cards=this.DashboardService.cards();
    this.datapie=this.DashboardService.datapie();
    this.dataSource.paginator = this.paginator;
    
  }

}
