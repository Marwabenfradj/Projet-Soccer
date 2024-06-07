import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  path: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.maxLength(6), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: [''],
      cPassword: [''],
    });
  }
  signUp() {
    console.log(this.signupForm.value);
    if (this.path == '/signUp') {
      this.signupForm.value.role = 'user';
    } else {
      this.signupForm.value.role = 'admin';
    }
    this.userService.signUp(this.signupForm.value).subscribe((res) => {
      console.log('Here response after signUp', res.msg);
    });
  }
}
