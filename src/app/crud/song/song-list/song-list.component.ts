import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../service/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  // @ts-ignore
  songs;
  // @ts-ignore
  // categories;
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.songService.getAll().subscribe(res => {
      this.songs = res;
      // this.categories = res.categories;

    })
  }
}
