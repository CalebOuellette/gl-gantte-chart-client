import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitivesPageComponent } from './primitives-page.component';

describe('PrimitivesPageComponent', () => {
  let component: PrimitivesPageComponent;
  let fixture: ComponentFixture<PrimitivesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimitivesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimitivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
