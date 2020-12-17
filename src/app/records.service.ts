import { Injectable } from '@angular/core';
import { Record } from './record.model';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  private records: Record[] = [
    {
      //id: 1,
      date: '2020-12-13',
      time: '10:00',
      location: 'Inside',
      severity: 2,
    },
    {
      //id: 2,
      date: '2020-12-13',
      time: '16:00',
      location: 'Outside',
      severity: 1,
    },
    {
      //id: 3,
      date: '2020-12-14',
      time: '14:00',
      location: 'Inside',
      severity: 2,
    },
    {
      //id: 4,
      date: '2020-12-14',
      time: '18:00',
      location: 'Outside',
      severity: 1,
    },
    {
      //id: 5,
      date: '2020-12-14',
      time: '22:00',
      location: 'Inside',
      severity: 4,
    },
    {
      //id: 1,
      date: '2020-12-15',
      time: '14:00',
      location: 'Inside',
      severity: 2,
    },
    {
      //id: 2,
      date: '2020-12-16',
      time: '18:00',
      location: 'Outside',
      severity: 1,
    },
    {
      //id: 3,
      date: '2020-12-17',
      time: '08:00',
      location: 'Inside',
      severity: 4,
    },
    {
      //id: 3,
      date: '2020-12-17',
      time: '22:00',
      location: 'Inside',
      severity: 4,
    },
    {
      //id: 3,
      date: '2020-12-18',
      time: '22:00',
      location: 'Inside',
      severity: 4,
    },
    {
      //id: 3,
      date: '2020-12-19',
      time: '18:30',
      location: 'Inside',
      severity: 4,
    },
    {
      //id: 3,
      date: '2020-12-19',
      time: '23:00',
      location: 'Inside',
      severity: 4,
    }
  ]
  constructor() { }
  //get all Records from the same date
  getDailyRecords(date: string){
    const result = this.records.filter(record =>
      record.date === date);
    console.log(result);
    return result;
  }

  //add record to Records list
  addRecord(newRecord: Record){
    this.records.push(newRecord);
    //return this.records;
    console.log(this.records);
    
  }

  //get all Records by week? here mock data are a weekly data
  getAllRecords(){
    return [...this.records];
  }
}
