import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SongService} from '../service/song.service';
import {SingerService} from '../service/singer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  msaapPlaylist: any[] = [];
  songs : any = [];
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;

  songTop: any;
  topLike: any;
  topNew: any;
  singers: any;

  formSearch: FormGroup | undefined;
  constructor(private fb: FormBuilder,
              private songService: SongService,
              private singerService: SingerService,
              ) { }

  ngOnInit(): void {
    this.formSearch = this.fb.group({
      search: [''],
    });
    this.getSingerAll();
    this.getAll();
    this.getTopView();
    this.getTopLike();
    this.getTopNew();
  }


  // danh sách ca sỹ
  getSingerAll(){
    this.singerService.getAll().subscribe(singer => {
      this.singers= singer
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




  triggerOnEnded(event: any) {
    console.log('ended');
  }

  // danh sách bài hát

  getAll(){
    this.songService.getAll().subscribe(res => {
      res.forEach((item: any) => {
        let song = {
          title: item.name,
          link: item.link,
          description: item.description,

        }
        this.msaapPlaylist.push(song)
      })

    })
  }

  onEnded($event: any) {

  }

  }


