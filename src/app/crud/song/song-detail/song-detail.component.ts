import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../service/song.service';
import {ActivatedRoute} from '@angular/router';

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
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;

  // @ts-ignore
  id= this.route.snapshot.paramMap.get('id')
  constructor(private songService:SongService,
              private  route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getSongById(this.id);
    this.getSong()
  }

  triggerOnEnded(event: any) {
    console.log('ended');
  }



  getSongById(id: string | null){
    this.songService.getById(id).subscribe(song =>{
      this.songs = song
    })
  }

  getSong(){
    this.songService.getTopView().subscribe(song =>{
      song.forEach((item: any) => {
        let song = {
          // id: item.id,

          link: item.link,

        }
        this.msaapPlaylist.push(song)
      })

    })

  }

  onEnded($event: any) {

  }

}
