import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesduaComponent } from './tesdua.component';

describe('TesduaComponent', () => {
  let component: TesduaComponent;
  let fixture: ComponentFixture<TesduaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesduaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesduaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
