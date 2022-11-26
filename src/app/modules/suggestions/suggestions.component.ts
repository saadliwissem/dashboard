import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  date: string;
  position: number;
  about: string;
  subject:string;
  name:string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 2, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 3, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 4, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 5, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 6, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 7, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 8, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 9, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 10, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 11, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 12, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 13, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 14, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 15, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 16, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 17, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 18, date: 'جانفي  2022', about: 'الموضوع',name:"user",subject:"اقتراح" },
  {position: 19, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
  {position: 20, date: 'جانفي  2022', about: 'الموضوع', name:"user",subject:"اقتراح"},
];
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  displayedColumns: string[] = ["action",'date', 'weight', 'name','subject','position'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor( ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    
  }

}
