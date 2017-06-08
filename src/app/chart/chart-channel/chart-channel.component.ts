import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-chart-channel',
  templateUrl: './chart-channel.component.html',
  styleUrls: ['./chart-channel.component.css']
})
export class ChartChannelComponent implements OnInit {



  @Input() Channel: any;
  constructor() { }

  ngOnInit() {
  }

}
