import { Component, OnInit } from '@angular/core';
import {GitGlassService} from "../../git-glass.service";
import {Project} from "../../project.model";

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements OnInit {

  projects: Project[];

  constructor(private gitGlassService: GitGlassService) { }

  ngOnInit() {
    this.projects = this.gitGlassService.getProjects();
  }

  onSelected() {
    console.log("Project selected!");
    //this.gitGlassService.recipeSelected.emit(this.recipe);
  }

}
