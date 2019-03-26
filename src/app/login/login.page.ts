import { Component, OnInit } from '@angular/core';
import {DataStore} from '../shared/data-store';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  loginmessage: string;

  constructor(private dataStore: DataStore,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.loginmessage = '';
  }

  login() {
    if (this.username === 'fmarco' || this.username === 'bsantos' || this.username === 'yukim') {
      this.navCtrl.navigateForward('tabs/home', {});
      this.dataStore.store.set('USER', this.username);
    } else {
      this.loginmessage = 'Your username and password does not match';
    }

    this.username = '';
    this.password = '';
  }

}
