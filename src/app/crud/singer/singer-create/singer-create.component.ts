import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SingerService} from '../../../service/singer.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../../service/category.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-singer-create',
  templateUrl: './singer-create.component.html',
  styleUrls: ['./singer-create.component.css']
})
export class SingerCreateComponent implements OnInit {
  categories: any;
  // @ts-ignore
  singerForm: any

  // singerForm: FormGroup = new FormGroup({
  //   name: new FormControl(),
  //   category_id: new FormControl(),
  //   gender: new FormControl(),
  //   date_of_birth: new FormControl(),
  //   biography: new FormControl(),
  //
  // });

  constructor(private singerService: SingerService,
              private router: Router,
              private categoryService: CategoryService,
              private  toarts: ToastrService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.singerForm = this.fb.group({
      name: ['', [Validators.required]],
      category_id: [''],
      gender: [''],
      date_of_birth: ['',  [Validators.required]],
      biography: ['',  [Validators.required]],
      avatar: ['',  [Validators.required]],
    });
    this.getAllCategory();
  }


  createSinger() {
    this.singerService.createSinger(this.singerForm.value).subscribe(() => {
      this.router.navigate(['singers']);
    });
  }


  getAllCategory() {
    this.categoryService.getAll().subscribe(res => {
      this.categories = res;
    });
  }

  toartrSinger(){
    this.toarts.success('Tọa thành công','Ok')
  }
  get f() {
    // @ts-ignore
    return this.singerForm.controls;
  }
}
