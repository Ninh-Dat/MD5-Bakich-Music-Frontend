import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../service/song.service';
@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
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
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getAll()
  }


  triggerOnEnded(event: any) {
    console.log('ended');
  }



// Material Style Advance Audio Player Playlist


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
