import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../service/category.service';
import {ActivatedRoute} from '@angular/router';
import {SongService} from '../../../service/song.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  category: any
  songs:any
  id= this.route.snapshot.paramMap.get('id');
  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private songService: SongService) { }

  ngOnInit(): void {
    this.getById(this.id);
    this.getSongByCategory(this.id);
  }

  getById(id: any){
    this.categoryService.getById(id).subscribe(category => {
      this.category =category;
    })
  }

  getSongByCategory(id:any){
    this.songService.getSongByCategory(id).subscribe(category => {
      this.songs = category;
    })
  }

}
