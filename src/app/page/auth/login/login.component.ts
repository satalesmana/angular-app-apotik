import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl
} from '@angular/forms';
import { AuthService } from '../../../service/auth/auth.service'
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    private service: AuthService,
    private router: Router,

  ) {
    this.loginForm = this.loginFormFormGroup()
  }

  loginFormFormGroup() {
    return new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.service.sendLogin(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          alert(error?.error?.msg)
        });
  }

}
