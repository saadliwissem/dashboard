import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  bigchart(){
    return[{
      name: 'الاقتراح الاول',
      data: [3, 4, 3, 5, 3, 10, 12]
  }, {
      name: 'الاقتراح الثاني',
      data: [1, 3, 4, 3, 3, 5, 4]
  },{
    name: ' الاقتراح الثالث',
    data: [6, 5, 2, 1, 3, 0, 0]
  },{
    name: ' الاقتراح الرابع',
    data: [7, 2, 10, 3, 3, 4, 12]
  },{
    name: ' الاقتراح الخامس ',
    data: [0, 2, 5, 6, 3, 10, 0]
  }];
  }
  cards(){
    return[3,4,5,6,0,0,0,5]
  }
  datapie(){
    return [
      { name: 'تونس', y: 61.41 },
      { name: 'القصرين', y: 11.84 },
      { name: 'منوبة', y: 10.85 },
      { name: 'اريانة', y: 4.67 },
      { name: 'باجة', y: 4.18 },
      { name: 'اخرى', y: 7.05 }
  ]
  }
}
