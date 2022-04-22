import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerUpdateComponent } from './singer-update.component';

describe('SingerUpdateComponent', () => {
  let component: SingerUpdateComponent;
  let fixture: ComponentFixture<SingerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
