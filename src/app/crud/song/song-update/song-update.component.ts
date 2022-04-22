import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SingerService} from '../../../service/singer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../../service/category.service';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../../service/user.service';
import {AlbumService} from '../../../service/album.service';
import {AuthorService} from '../../../service/author.service';
import {SongService} from '../../../service/song.service';

@Component({
  selector: 'app-song-update',
  templateUrl: './song-update.component.html',
  styleUrls: ['./song-update.component.css']
})
export class SongUpdateComponent implements OnInit {

  categories: any;
  users: any;
  albums: any;
  authors: any;
  singers: any;
  // @ts-ignore
  ids: number;
  // @ts-ignore
  updateForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');
  constructor( private singerService: SingerService,
               private route: ActivatedRoute,
               private router: Router,
               private categoryService: CategoryService,
               private toastr: ToastrService,
               private userService: UserService,
               private  album: AlbumService,
               private authorService: AuthorService,
               private songService: SongService) {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.ids = +paramMap.get('id');
      this.getByid(this.id);
    })
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllAlbum();
    this.getAllSinger();
    this.getAllUser();
    this.getAllAuthor();
  }

  getByid(id: any){
    return this.songService.getById(id).subscribe( res => {
      this.updateForm = new FormGroup({
        name: new FormControl(res.name),
        category_id: new FormControl(res.category_id),
        user_id: new FormControl(res.user_id),
        author_id: new FormControl(res.author_id),
        album_id: new  FormControl(res.album_id),
        singer_id: new FormControl(res.singer_id),
        description: new FormControl(res.description),
        image: new FormControl(res.image),
        link: new  FormControl(res.link)
      })
    })
  }

// @ts-ignore
  submit() {

    return this.songService.updateSong(this.id, this.updateForm.value).subscribe(() => {
      this.router.navigate(['songs']);
    });
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

  toast(){
    this.toastr.success('Update thành công', 'Ok')
  }
}
