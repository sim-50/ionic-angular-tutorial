import { StorageService } from './../storage.service';
import { RecordsService } from './../records.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'app-weeklysummary',
  templateUrl: './weeklysummary.page.html',
  styleUrls: ['./weeklysummary.page.scss'],
})
export class WeeklysummaryPage implements OnInit {
  @ViewChild('barChart') barChart;
  username: string = '';
  bars: 7;
  colorArray: any;
  curDate: string = moment().format();
  constructor(private recordsService: RecordsService, private storage: StorageService) { }

  ngOnInit() {
    this.storage.get('username').then(username =>{
      this.username = username;
    })
  }

  ionViewDidEnter(){
    this.createBarChart();
  }


  // prevDay(){
  //   this.curDate = moment().subtract(1,'day').format();
  //   //console.log(this.curDate);
  //   return this.curDate;
  // }

  createBarChart(){
    let y_axis = new Array(7);
    let x_axis = new Array(7);
    let formatedDate = this.curDate.split('T')[0];
    const n = y_axis.length;
    y_axis[n - 1] = this.recordsService.getDailyRecords(formatedDate).length;
    x_axis[n - 1] = formatedDate;
    for(let i = 5; i>=0; i--){
      let date = moment().subtract(n-1-i,'day').format(); //get the previous day;
      formatedDate = date.split('T')[0];   //format previous day
      y_axis[i] = this.recordsService.getDailyRecords(formatedDate).length; //get the number of attacks on that day
      x_axis[i] = formatedDate;
    }
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: x_axis,
        datasets:[{
          label: "times",
          data: y_axis,
          backgroundColor: 'rgb(38, 194, 129)',
          borderColor:  'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }]
        }
      }
    });
  }

}
