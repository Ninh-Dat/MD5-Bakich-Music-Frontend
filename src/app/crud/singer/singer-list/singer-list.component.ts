import {Component, OnInit} from '@angular/core';
import {SingerService} from '../../../service/singer.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.css']
})
export class SingerListComponent implements OnInit {
  // @ts-ignore
  singers;
  // @ts-ignore
  users;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private singer: SingerService,
              private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.singer.getAll().subscribe(res => {
      this.singers = res;
    });
  }

  getUserById(id: string | null) {
    this.userService.getById(id).subscribe(user => {
      this.users = user;
    });
  }
}
