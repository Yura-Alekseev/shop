import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService, User} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  errorMessage = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')
      ])
    });
  }

  submit() {
    this.submitted = true;
    const  user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.auth.doRegister(user)
      .then(res => {
        this.errorMessage = '';
        this.form.reset();
        this.router.navigate(['/login']);
      }, err => {
        if (err.code === 'auth/email-already-in-use') {
          this.errorMessage = 'Такой email уже зарегистрирован';
        }
      });

    this.submitted = false;
  }
}
