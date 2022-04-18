import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../user';
import {UserService} from '../../service/user.service';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  formSearch: FormGroup | undefined;
  userLogin: User | undefined
  users: any;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      search: [''],
    });

    this.getUserLogin();
    this.getUserById(this.id);
  }
  getUserById(id: string | null) {
    this.userService.getById(id).subscribe((user: any) => {
      this.users = user;
    });
  }
  getUserLogin(){
    let data = localStorage.getItem('userLogin');
    // @ts-ignore
    this.userLogin = JSON.parse(data);
  }
  getUserLogout(){
    this.router.navigate(['login'])
  }

}
