import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  @Input() bigcharts=[]; 
  Highcharts=Highcharts;

  chartOptions={};

  constructor() { }

  ngOnInit() {
  this.chartOptions={
    chart: {
      type: 'areaspline'
  },
  title: {
      text: 'عدد الاصوات المقترحات في اليوم '
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
      /*backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'*/
  },
  xAxis: {
      categories: [
          'الاحد',
          'السبت',
          'الجمعة',
          'الخميس',
          'الاربعاء',
          'الثلثاء',
          'الاثنين'
      ],
      plotBands: [{ // visualize the weekend
          from: 0,
          to: 1.5,
          color: 'rgba(68, 170, 213, .2)'
      }]
  },
  yAxis: {
      title: {
          text: 'عدد الاصوات'
      }
  },
  tooltip: {
      shared: true,
      valueSuffix: ' صوت'
  },
  credits: {
      enabled: false
  },
  plotOptions: {
      areaspline: {
          fillOpacity: 0.5
      }
  },
  
  exporting:{
    enabled:true
  },
  series: this.bigcharts
  };
  HC_exporting(Highcharts);
 setTimeout(()=>{
    window.dispatchEvent(
      new Event("resize")
    );
  },300)
  }

}
