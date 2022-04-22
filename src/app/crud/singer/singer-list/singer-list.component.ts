import {Component, OnInit} from '@angular/core';
import {SingerService} from '../../../service/singer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {SongService} from '../../../service/song.service';

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.css']
})
export class SingerListComponent implements OnInit {
  // @ts-ignore
  singers;
  // @ts-ignore
  songTop: any;

  keyword: any = [];

  constructor(private singer: SingerService,
              private route: ActivatedRoute,
              private songService: SongService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getTopView();
  }

  getAll() {
    this.singer.getAll().subscribe(res => {
      this.singers = res;
    });
  }

  getTopView() {
    this.songService.getTopView().subscribe(song => {
      this.songTop = song;
    });
  }

  search() {
    this.singer.searchSinger(this.keyword).subscribe(res => {
      this.singers = res;
    });
  }

  deleteSinger(id: any) {
    if (confirm('Are you sure?')) {
      this.singer.destroy(id).subscribe(() => {
        this.getAll()
      });
    }

  }
}
