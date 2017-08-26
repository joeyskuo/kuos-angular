import {Component, OnInit} from '@angular/core';
import {GitGlassService} from "./git-glass.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GitGlassService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  startup: boolean = false;

  ngOnInit(){
    this.startup = false;
  }

  start(){
    this.startup = true;
  }


  title = 'app';
}
