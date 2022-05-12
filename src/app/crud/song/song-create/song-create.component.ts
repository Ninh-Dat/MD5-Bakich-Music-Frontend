import { Component, OnInit } from '@angular/core';

import {SongService} from '../../../service/song.service';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../service/category.service';
import {SingerService} from '../../../service/singer.service';
import {UserService} from '../../../service/user.service';
import {AlbumService} from '../../../service/album.service';
import {AuthorService} from '../../../service/author.service';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

// import { map, finalize } from 'rxjs/operators';
// import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css'],
})
export class SongCreateComponent implements OnInit {
  categories: any;
  singers: any;
  users: any;
  albums: any;
  authors: any;


  // songForm:any;

  // songForm: FormGroup = new FormGroup({
  //   name: new FormControl(),
  //   category_id: new FormControl(),
  //   singer_id: new FormControl(),
  //   user_id: new FormControl(),
  //   album_id: new FormControl(),
  //   author_id: new FormControl(),
  //   description: new FormControl(),
  // })

  constructor(private songService: SongService,
              private  router: Router,
              private categoryService: CategoryService,
              private singerService: SingerService,
              private userService: UserService,
              private  album: AlbumService,
              private authorService: AuthorService,
              private toastr: ToastrService,
              private fb: FormBuilder) { }

  songForm: FormGroup = new FormGroup({
    name: new FormControl(),
    category_id: new FormControl(),
    singer_id: new FormControl(),
    user_id: new FormControl(),
    album_id: new FormControl(),
    author_id: new FormControl(),
    description: new FormControl(),
  });




  ngOnInit(): void {
    this.songForm = this.fb.group({
      name: ['', [Validators.required]],
      category_id: [''],
      singer_id: [''],
      user_id: [''],
      album_id: [''],
      author_id: [''],
      description: ['', [Validators.required]],
      image:[''],
      link: [''],
    });
    this.getAllCategory();
    this.getAllAlbum();
    this.getAllSinger();
    this.getAllUser();
    this.getAllAuthor();
  }


  createSong(){
    const data = this.songForm.value;
    this.songService.songCreate(data).subscribe(()=>{
       this.router.navigate(['songs'])
    })
  }
    getAllCategory(){
      this.categoryService.getAll().subscribe((res) => {
        this.categories = res;
      });
    }


  // onFileSelected(event: { target: { files: any[] } }) {
  //   const n = Date.now();
  //   const file = event.target.files[0];
  //   const filePath = `RoomsImages/${n}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(`RoomsImages/${n}`, file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe((url: any) => {
  //           if (url) {
  //             this.imageurl = url;
  //           }
  //           console.log(this.imageurl);
  //         });
  //       })
  //     )
  //     .subscribe((url: any) => {
  //       if (url) {
  //         console.log(url);
  //       }
  //     });
  // }


  getAllUser() {
    this.userService.getAll().subscribe((res) => {
      this.users = res;
    });
  }

  getAllAlbum() {
    this.album.getAll().subscribe((res) => {
      this.albums = res;
    });
  }
  getAllSinger() {
    this.singerService.getAll().subscribe((res) => {
      this.singers = res;
    });
  }

  getAllAuthor() {
    this.authorService.getALl().subscribe((res) => {
      this.authors = res;
    });
  }

  toartrSong(){
    this.toastr.success('Tọa thành công','Ok')
  }

  get f() {
    // @ts-ignore
    return this.songForm.controls;
  }
}
