import { Component, OnInit } from '@angular/core';
import {SingerService} from '../../../service/singer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-singer-detail',
  templateUrl: './singer-detail.component.html',
  styleUrls: ['./singer-detail.component.css']
})
export class SingerDetailComponent implements OnInit {


  // @ts-ignore
  singers;
  id = this.route.snapshot.paramMap.get('id')
  constructor(private singerService: SingerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSingerById(this.id)
  }

  getSingerById(id: any){
    this.singerService.getById(id).subscribe(singer => {
      this.singers = singer;
    })
  }
}
