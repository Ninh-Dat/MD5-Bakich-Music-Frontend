import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SingerService} from '../../service/singer.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-singer-create',
  templateUrl: './singer-create.component.html',
  styleUrls: ['./singer-create.component.css']
})
export class SingerCreateComponent implements OnInit {
  categories: any;
    singerForm: FormGroup = new FormGroup({
      name: new FormControl(),
      category_id: new FormControl(),
      // image: new FormControl(),
      gender: new FormControl(),
      date_of_birth: new FormControl(),
      biography: new FormControl(),
      information: new FormControl(),

    })
  constructor( private singerService: SingerService,
               private router: Router,
               private categoryService: CategoryService) { }

  ngOnInit(): void {
      this.getAllCategory()
  }


createSinger(){
      this.singerService.createSinger(this.singerForm.value).subscribe(() =>{
        this.router.navigate(['singers'])
      })
}




getAllCategory(){
      this.categoryService.getAll().subscribe(res=>{
        this.categories = res
      })
}
}
