import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  publicfiles: string[] = ['تعبيد الطريق الوطنية 17', 'ترميم جسر بنزرت', 'تنوير نهج المكسيك', 'بناء مكتب بريد بالعيون', ];
  privatefiles: string[] = ['عقد زواج مسعود اوزيل', 'عقود خاصة' ];

  constructor() { }

  ngOnInit(): void {
  }

}
