import { Component, OnInit } from '@angular/core';
import {GitGlassService} from "../git-glass.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private gitGlassService: GitGlassService) { }

  ngOnInit() {
  }

  introSelect(){
    console.log('Intro Select');
    this.gitGlassService.introSelected.emit(true);
  }
}
