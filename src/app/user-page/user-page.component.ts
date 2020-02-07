import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.less']
})
export class UserPageComponent implements OnInit {
  userName: string;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.getUserName();
  }

  getUserName() {
    return this.userName = localStorage.getItem('userName');
  }

  resetPassword() {
    this.auth.resetPassword();
  }
}
