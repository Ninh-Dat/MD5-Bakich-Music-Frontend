import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../user';
import {UserService} from '../../service/user.service';
import {SingerService} from '../../service/singer.service';
import {SongService} from '../../service/song.service';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  formSearch: FormGroup | undefined;
  userLogin: User | undefined
  // users: any;
  // @ts-ignore
  singers;

  // @ts-ignore
  keyword: string;
  songs: any;
  songTop: any;
  topLike: any;
  topNew: any;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private singerService: SingerService,
              private songService: SongService) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      search: [''],
    });
    this.getSingerAll();
    this.getSongAll();
    this.getTopView();
    this.getTopLike();
    this.getTopNew();
    // this.search();
  }


  // danh sách ca sĩ
  getSingerAll(){
    this.singerService.getAll().subscribe(singer => {
      this.singers= singer
    })
  }
  // danh sách bài hát
  getSongAll(){
    this.songService.getAll().subscribe(song => {
      this.songs = song;
    })
  }
  //danh sách được nghe nhiều nhất
  getTopView(){
    this.songService.getTopView().subscribe(songs =>{
      this.songTop = songs;
    })
  }

  //danh sách được like nhiều nhất
  getTopLike(){
    this.songService.getTopLike().subscribe(song =>{
      this.topLike = song
    })
  }
  //Bài hát mới nhất
  getTopNew(){
    this.songService.getTopNew().subscribe(song =>{
      this.topNew = song
    })
  }

  //search
  search() {
    this.songService.searchSong(this.keyword).subscribe(res => {
      this.songs = res;
    });
  }
  // getUserById(id: string | null) {
  //   this.userService.getById(id).subscribe(user => {
  //     this.users = user;
  //   });
  // }
  getUserLogin(){
    let data = localStorage.getItem('userLogin');
    // @ts-ignore
    this.userLogin = JSON.parse(data);
  }
  getUserLogout(){
    this.router.navigate(['login'])
  }

}
