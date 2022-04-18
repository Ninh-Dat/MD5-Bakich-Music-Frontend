import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  // @ts-ignore
  users;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getUserById(this.id);
  }

  getUserById(id: string | null) {
    this.userService.getById(id).subscribe(user => {
      this.users = user;
    });
  }

}
