import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TessatuComponent } from './tessatu.component';

describe('TessatuComponent', () => {
  let component: TessatuComponent;
  let fixture: ComponentFixture<TessatuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TessatuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TessatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
