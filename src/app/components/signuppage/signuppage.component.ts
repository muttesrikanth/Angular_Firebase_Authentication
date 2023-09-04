import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication-service.component';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css'],
})
export class SignuppageComponent {
  signUpForm!: FormGroup;
  constructor(private Authserv: AuthenticationService) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.maxLength(6)]),
    });
  }
  onSubmit() {
    this.Authserv.signup(this.signUpForm.value);
    this.signUpForm.reset();
  }
}
