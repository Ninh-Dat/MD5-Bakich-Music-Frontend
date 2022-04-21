import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.getAll();
  }

  getAll(){
    this.userService.getAll().subscribe(res=>{
      this.users = res;
      console.log(this.users);
    });
  }

}
