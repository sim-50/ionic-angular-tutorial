import { StorageService } from './../storage.service';
import { EventService } from './../event.service';
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
  username: string = '';
  constructor(private recordService:RecordsService, private eventService: EventService, private storage:StorageService) {
    
  }
  editText = "Edit";
  onClickEdit(){
    
  }
  ngOnInit(){
    //console.log(this.curDate);
    this.storage.get('username').then(username =>{
      this.username = username;
      //console.log(this.username);
    })
    var formatedDate = this.curDate.split('T')[0];
    //console.log(formatedDate);
    this.records = this.recordService.getDailyRecords(formatedDate);
    //console.log(this.records);
    this.eventService.event.on('useraction',()=>{
      this.records = this.recordService.getDailyRecords(formatedDate);
    })
  }
  



}
