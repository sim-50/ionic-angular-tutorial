import { StorageService } from '../storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  constructor(public storage: StorageService) { }

  ngOnInit() {
    this.storage.get('username').then(username =>{
      this.username = username;
      //console.log(this.username);
    })
  }
  onClickLogout(){
    this.storage.clear();
  }
}
