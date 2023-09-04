import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication-service.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authserv: AuthenticationService) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.maxLength(6)]),
    });
  }

  onSubmit() {
    this.authserv.login(this.loginForm.value);
    this.loginForm.reset();
  }
  onReset() {
    this.loginForm.reset();
  }
}
