import {Component, OnInit} from '@angular/core';
import {SingerService} from '../../../service/singer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../../service/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-singer-update',
  templateUrl: './singer-update.component.html',
  styleUrls: ['./singer-update.component.css']
})
export class SingerUpdateComponent implements OnInit {
  categories: any
  singers: any
  // @ts-ignore
    ids: number;
  // @ts-ignore
    updateForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private singerService: SingerService,
              private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService,
              private toast: ToastrService) {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.ids = +paramMap.get('id');
      this.getByid(this.id);
    })
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getSingerById(this.id)
  }

  getSingerById(id: string | null) {
    this.singerService.getById(id).subscribe(res => {
      this.singers = res;
    });
  }
getByid(id: any){
    return this.singerService.getById(id).subscribe( res => {
      this.updateForm = new FormGroup({
        name: new FormControl(res.name),
        category_id: new FormControl(res.category_id),
        gender: new FormControl(res.gender),
        avatar: new FormControl(res.avatar),
        date_of_birth: new  FormControl(res.date_of_birth),
        biography: new FormControl(res.biography),
      })
    })
}


// @ts-ignore
  submit() {

    return this.singerService.updateSinger(this.id, this.updateForm.value).subscribe(() => {
      this.router.navigate(['singers']);
    });
  }

 getAllCategory(){
    this.categoryService.getAll().subscribe(res=>{
      this.categories = res
    })
 }
 toastr(){
    this.toast.success('Sửa thành công', 'Ok')
 }
}
