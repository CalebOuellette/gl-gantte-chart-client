import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCreatePageComponent } from './chart-create-page.component';

describe('ChartCreatePageComponent', () => {
  let component: ChartCreatePageComponent;
  let fixture: ComponentFixture<ChartCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
