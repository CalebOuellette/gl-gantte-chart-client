import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectService } from './services/project.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService]
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }

}
