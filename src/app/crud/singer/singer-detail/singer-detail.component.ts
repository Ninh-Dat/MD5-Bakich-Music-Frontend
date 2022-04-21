import { Component, OnInit } from '@angular/core';
import {SingerService} from '../../../service/singer.service';
import {ActivatedRoute} from '@angular/router';
import {SongService} from '../../../service/song.service';

@Component({
  selector: 'app-singer-detail',
  templateUrl: './singer-detail.component.html',
  styleUrls: ['./singer-detail.component.css']
})
export class SingerDetailComponent implements OnInit {


  // @ts-ignore
  singers;
  songs:any
  id = this.route.snapshot.paramMap.get('id')
  constructor(private singerService: SingerService,
              private route: ActivatedRoute,
              private songService: SongService) { }

  ngOnInit(): void {
    this.getSingerById(this.id)
    this.getSongByIdSinger(this.id)
  }

  getSingerById(id: any){
    this.singerService.getById(id).subscribe(singer => {
      this.singers = singer;
    })
  }
  getSongByIdSinger(id: any){
    this.songService.getSongBySinger(id).subscribe(song => {
      this.songs = song;
    })
  }
}
