import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  formSearch: FormGroup | undefined;
  users: any;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private fb: FormBuilder,
              private  userService: UsesService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    this.formSearch = this.fb.group({
      search: [''],
    });
    this.getUserById(this.id);
  }
  getUserById(id: any) {
    this.userService.getById(id).subscribe((user: any) => {
      this.users = user;
    });
  }

}
