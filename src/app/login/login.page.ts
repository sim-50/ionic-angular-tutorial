import { StorageService } from './../storage.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage {

  constructor(public storage: StorageService) {
    //set a key/value
  }
  inputValue: string = "";
  onClickSubmit(){
    console.log("entered name : " + this.inputValue);
    const name = this.inputValue;
    this.storage.set('username', name);
    this.storage.get('username').then(
      (val) =>{
        console.log('Name in local storage ', val);
      }
    );
    

  }

}
