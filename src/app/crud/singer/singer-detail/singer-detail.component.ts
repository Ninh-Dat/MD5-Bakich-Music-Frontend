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


  msaapPlaylist: any[] = [];
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;
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
    this.getAll(this.id)
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

  triggerOnEnded(event: any) {
    console.log('ended');
  }



// Material Style Advance Audio Player Playlist


  getAll(id:any){
    this.songService.getSongBySinger(id).subscribe(res => {
      res.forEach((item: any) => {
        let song = {
          id: item.id,
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
