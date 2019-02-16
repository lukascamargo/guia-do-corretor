import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguradorasComponent } from './seguradoras.component';

describe('SeguradorasComponent', () => {
  let component: SeguradorasComponent;
  let fixture: ComponentFixture<SeguradorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguradorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguradorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
