import { Component } from '@angular/core';
import {GitGlassService} from "./git-glass.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GitGlassService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
