import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../service/song.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../service/category.service';
import {SingerService} from '../../../service/singer.service';
import {UserService} from '../../../service/user.service';
import {AlbumService} from '../../../service/album.service';
import {AuthorService} from '../../../service/author.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {

  categories: any;
  singers: any;
  users: any;
  albums: any;
  authors: any;

  songForm: FormGroup = new FormGroup({
    name: new FormControl(),
    category_id: new FormControl(),
    singer_id: new FormControl(),
    user_id: new FormControl(),
    album_id: new FormControl(),
    author_id: new FormControl(),
    description: new FormControl(),
  })

  constructor(private songService: SongService,
              private  router: Router,
              private categoryService: CategoryService,
              private singerService: SingerService,
              private userService: UserService,
              private  album: AlbumService,
              private authorService: AuthorService,
              private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllAlbum();
    this.getAllSinger();
    this.getAllUser();
    this.getAllAuthor();
  }

  createSong(){
    console.log(this.songForm.value)
    this.songService.songCreate(this.songForm.value).subscribe(()=>{
       this.router.navigate(['songs'])
    })
  }
  getAllCategory(){
    this.categoryService.getAll().subscribe(res=>{
      this.categories = res
    })
  }
  getAllUser(){
    this.userService.getAll().subscribe(res=>{
      this.users = res;
    })
  }

  getAllAlbum(){
    this.album.getAll().subscribe(res =>{
      this.albums = res;
    })
  }
  getAllSinger(){
    this.singerService.getAll().subscribe(res=>{
      this.singers = res
    })
  }

  getAllAuthor(){
    this.authorService.getALl().subscribe(res=>{
      this.authors = res
    })
  }

  toartrSong(){
    this.toastr.success('Tọa thành công','Ok')
  }
}
