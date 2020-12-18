import { EventService } from './../event.service';
import { RecordsService } from './../records.service';
import { Component, OnInit } from '@angular/core';
import { Record } from '../record.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportform',
  templateUrl: './reportform.page.html',
  styleUrls: ['./reportform.page.scss'],
})
export class ReportformPage implements OnInit {
  selectedDate: string;
  selectedTime: string;
  selectedLocation: string;
  selectedSeverity: number;
  
   
  constructor(private recordService : RecordsService, private router: Router, private eventService:EventService) { }

  ngOnInit() {
  }
  
  change(datePicker){
    datePicker.open();
  }
  changeTime(){
    
  }
  onClickSubmit(){
    //console.log("selected date: " + this.selectedDate + " selected time: "+ this.selectedTime + " selected location: "+this.selectedLocation + " selected severity: "+this.selectedSeverity);
    const newRecord : Record = {
      date: "",
      time: "",
      location: "",
      severity:0
    };
    const formatedDate = this.selectedDate.split('T')[0];
    const formatedTime = this.selectedTime.split('T')[1].substring(0,5);
    newRecord.date = formatedDate;
    newRecord.time = formatedTime;
    newRecord.location = this.selectedLocation;
    newRecord.severity = this.selectedSeverity;
    this.recordService.addRecord(newRecord);
    this.eventService.event.emit('useraction');
    this.router.navigate(['/dailyrecords']);
  }
}
