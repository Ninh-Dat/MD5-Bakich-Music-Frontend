import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../service/song.service';
import { Track } from 'ngx-audio-player';
import {ToastrModule, ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  keyword: any = [];
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
  constructor(private songService: SongService,
             ) { }

  ngOnInit(): void {
    this.getAll()
    this.getShowAll()
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
  getShowAll(){
    this.songService.getAll().subscribe(song =>{
      this.songs = song;
    })
  }


  search() {
    this.songService.searchSong(this.keyword).subscribe(res => {
      this.songs = res;
    });
  }


  deleteSong(id: any) {
    if (confirm('Are you sure?')) {
      this.songService.destroy(id).subscribe(() => {
        this. getShowAll()
      });
    }

  }
}
