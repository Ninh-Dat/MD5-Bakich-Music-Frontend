import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
    });
  }
  get f() {
    // @ts-ignore
    return this.loginForm.controls;
  }
  submit() {
    // @ts-ignore
    const data = this.loginForm.value;
    this.authService.login(data).subscribe(res => {
      const userLogin = res.user;

      localStorage.setItem('userLogin',JSON.stringify(userLogin));
      this.router.navigate(['master']);

      localStorage.setItem('userLogin', JSON.stringify(userLogin));
      if(res.user.role_id == 2){
        this.router.navigate(['master']);
      }else{
        this.router.navigate(['admin']);
      }


    });
  }


}
