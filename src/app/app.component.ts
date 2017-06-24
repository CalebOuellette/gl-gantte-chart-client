import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectService } from './services/project.service';
import { ColorService } from './services/color.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService, ColorService]
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }

}
