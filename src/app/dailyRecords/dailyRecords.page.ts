import { RecordsService } from './../records.service';
import { Component, OnInit } from '@angular/core';
import { Record } from '../record.model';
import * as moment from 'moment';

@Component({
  selector: 'app-dailyrecords',
  templateUrl: 'dailyRecords.page.html',
  styleUrls: ['dailyRecords.page.scss'],
})
export class DailyRecordsPage implements OnInit{
  records: Record[];
  curDate: string = moment().format();
  constructor(private recordService:RecordsService) {
    
  }
  editText = "Edit";
  onClickEdit(){
    
  }
  ngOnInit(){
    //console.log(this.curDate);
    var formatedDate = this.curDate.split('T')[0];
    //console.log(formatedDate);
    this.records = this.recordService.getDailyRecords(formatedDate);
    console.log(this.records);
  }
  



}
