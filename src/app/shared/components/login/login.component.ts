import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginRequest } from '../../models/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

formGroup!: FormGroup;
/**
 *
 */
constructor(formbuilder: FormBuilder, private authService: AuthService, private router:Router) {
  
  this.formGroup = formbuilder.group({
    email: [''],
    password: ['']
  });
}

get emailControl() {
  return this.formGroup.get('email') as FormControl;
}

get passwordControl() {
  return this.formGroup.get('password') as FormControl;
}

onSubmit() {
  const loginRequest : LoginRequest = this.formGroup.value;
  this.authService.login(loginRequest).subscribe(
    result => {
      if (result) {
        this.router.navigate(['/']);
      }
    }
  );
}

}
