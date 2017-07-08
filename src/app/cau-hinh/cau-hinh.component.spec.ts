import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauHinhComponent } from './cau-hinh.component';

describe('CauHinhComponent', () => {
  let component: CauHinhComponent;
  let fixture: ComponentFixture<CauHinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauHinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauHinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
