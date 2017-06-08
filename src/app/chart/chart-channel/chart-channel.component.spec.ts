import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartChannelComponent } from './chart-channel.component';

describe('ChartChannelComponent', () => {
  let component: ChartChannelComponent;
  let fixture: ComponentFixture<ChartChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
