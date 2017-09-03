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

  constructor(private gitGlassService: GitGlassService) { }

  ngOnInit(){
    this.startup = false;
  }

  start(){
    document.getElementById('footnav').style.position = 'static';
    this.startup = true;
  }


  title = 'app';
}
