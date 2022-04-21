import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: any
  constructor(private categoryService: CategoryService,
              ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.categoryService.getAll().subscribe(category=>{
      this.categories = category;
    })
  }
}
