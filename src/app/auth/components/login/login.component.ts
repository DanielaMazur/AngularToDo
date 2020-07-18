import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { tap, first } from 'rxjs/operators';
import { LoginResponse } from '../../auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading: boolean;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: [null, [Validators.minLength(4), Validators.required]],
      password: [null, [Validators.minLength(8), Validators.required]],
    });
  }

  login(): void {
    this.isLoading = true;
    const { username, password } = this.loginForm.value;

    this.authService
      .login(username, password)
      .pipe(tap((_) => (this.isLoading = false), first()))
      .subscribe((response: LoginResponse) => console.log(response));
  }
}
