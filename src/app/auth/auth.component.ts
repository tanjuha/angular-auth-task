import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user = {
    username: 'user',
    password: '12345'
  };
  form: FormGroup;
  error = {
    status: false,
    errorText: 'error'
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'username' : new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    });
  }
  onSubmit() {
    const formData = this.form.value;
    if (formData.username === this.user.username && formData.password === this.user.password) {
      this.authService.logIn();
      window.localStorage.setItem('user', JSON.stringify(this.user));
      window.sessionStorage.setItem('user', JSON.stringify(this.user));
      this.error.status = false;
      this.router.navigate(['/home']);
    } else  if (formData.username !== this.user.username && formData.password !== this.user.password) {
      this.error.status = true;
      this.error.errorText = 'Wrong username and password';
    } else  if (formData.username !== this.user.username) {
      this.error.status = true;
      this.error.errorText = 'Wrong username';
    } else  if (formData.password !== this.user.password) {
      this.error.status = true;
      this.error.errorText = 'Wrong password';
    }
  }

}
