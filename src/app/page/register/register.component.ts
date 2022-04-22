import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup | undefined;
  constructor(private fb: FormBuilder,
              private registerService: AuthService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.formRegister = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
        password_confirmation: ['', Validators.required],

        phone: ['', [Validators.required, Validators.maxLength(10)]],
      },
      {
        validators: this.confirmedValidator('password', 'password_confirmation')
      })
  }


  submit(){
    // @ts-ignore
    const data = this.formRegister.value;
    this.registerService.register(data).subscribe( res =>{
      const userRegister = res.user;
      localStorage.setItem('userRegister', JSON.stringify(userRegister));
      this.router.navigate(['login']);
    })
  }
  get f(){
    // @ts-ignore
    return this.formRegister.controls;
  }

  toars() {
    this.toastr.success('Đăng ký', 'Đăng ký thành công')
  }

  confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}
