import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any = {};
  loginForm!: FormGroup;
  constructor(private router: Router, private userService: UserService) {}
  errorMsg: string = '';

  ngOnInit(): void {}

  login() {
    console.log('here user', this.user);

    this.userService.login(this.user).subscribe((response) => {
      console.log('here response after login', response);
      if (response.user) {
        //save token to ss
        sessionStorage.setItem('token', response.user);
        let decoded: any = jwtDecode(response.user);
        console.log('decoded', decoded);
        if (decoded.role == 'admin') {
          this.router.navigate(['table-match']);
        } else {
          this.router.navigate(['/']);
        }
      } else {
        //Display msg error
        this.errorMsg = 'Please check email/Pwd';
      }
    });
  }
}
