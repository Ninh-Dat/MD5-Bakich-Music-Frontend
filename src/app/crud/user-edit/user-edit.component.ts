import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {User} from '../../user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  // @ts-ignore
  ids: number;
  // @ts-ignore
  updateForm: FormGroup;
  // @ts-ignore
  userLogin: User;
  // @ts-ignore
  users;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.ids = +paramMap.get('ids');
      this.getById(this.id);
    });
    this.getUserById(this.id);
  }

  ngOnInit() {
    this.getUserLogin();

  }

  getUserById(id: string | null) {
    this.userService.getById(id).subscribe(user => {
      this.users = user;
    });
  }
  getById(id: string | null) {
    return this.userService.getById(id).subscribe(user => {
        this.updateForm = new FormGroup({
          name: new FormControl(user.name),
          email: new FormControl(user.email),
          address: new FormControl(user.address),
          phone: new FormControl(user.phone),
        });
      }
    );

  }

  // @ts-ignore
  submit(id) {
    return this.userService.updateUser(id, this.updateForm.value).subscribe(() => {
      this.router.navigate(['/users/'+id+'/detail']);
    });
  }

  getUserLogin(){
    let data = localStorage.getItem('userLogin');
    // @ts-ignore
    this.userLogin = JSON.parse(data);
  }
}
