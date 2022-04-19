import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../service/song.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  // @ts-ignore
  songs;
  id= this.route.snapshot.paramMap.get('id')
  constructor(private songService:SongService,
              private  route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getSongById(this.id);
  }


  getSongById(id: string | null){
    this.songService.getById(id).subscribe(song =>{
      this.songs = song
    })
  }
}
