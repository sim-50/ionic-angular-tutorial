import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public event: any;
  constructor() {
    this.event = new EventEmitter();
   }
}
