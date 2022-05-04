import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../service/song.service';
import {ActivatedRoute} from '@angular/router';
import {any} from 'codelyzer/util/function';


@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  msaapPlaylist: any[] = [];
  songs : any = [];
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [1,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;

  // @ts-ignore
  id= this.route.snapshot.paramMap.get('id')
  constructor(private songService:SongService,
              private  route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getSong(this.id)
    this.getSongById(this.id);

  }

  triggerOnEnded(event: any) {
    console.log('ended');
  }



  getSongById(id: string | null){
    this.songService.getById(id).subscribe(song =>{
      this.songs = song
    })
  }

  getSong(id:any){
    this.songService.getById(id).subscribe(res =>{
      res.forEach((item: any) => {
        let song = {
          id: item.id,
          link: item.link,
          name: item.name,
        }
        this.msaapPlaylist.push(song)
      })

    })

  }

  onEnded($event: any) {

  }

}
