import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // @ts-ignore
  formSearch: FormGroup;
  // @ts-ignore
  userLogin: User

  // @ts-ignore
  users;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private fb: FormBuilder,
              private  userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    this.formSearch = this.fb.group({
      search: [''],
    });
    this.getUserLogin();
    this.getUserById(this.id);
  }
  getUserById(id: string | null) {
    this.userService.getById(id).subscribe((user) => {
      this.users = user;
    });
  }

  getUserLogin(){
    let data = localStorage.getItem('userLogin');
    // @ts-ignore
    this.userLogin = JSON.parse(data);
  }

}
