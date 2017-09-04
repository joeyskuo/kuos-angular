import { Component, OnInit } from '@angular/core';
import idList from './idList';
import * as githubEmbed from '../js/github-embed.min';
import {Project} from "../project.model";
import {GitGlassService} from "../git-glass.service";
import projectFiles from './projectFiles';
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));


@Component({
  selector: 'app-git-glass',
  templateUrl: './git-glass.component.html',
  styleUrls: ['./git-glass.component.css']
})
export class GitGlassComponent implements OnInit {

  emptyProj: Project = new Project(
    'empty',
    'empty',
    {}
  );

  projectIds = idList;
  selectedProject: Project;
  displayIntro: boolean = true;

  constructor(private gitGlassService: GitGlassService) { }

  ngOnInit() {
    this.gitGlassService.introSelected
      .subscribe(
        (enabled: boolean) => {
          this.displayIntro = enabled;
          this.selectedProject = this.emptyProj;
        }
      );
    this.gitGlassService.projectSelected
      .subscribe(
        (project: Project) => {
          this.selectedProject = project;
          this.displayIntro = false;
          wait(5).then(() => this.onProjectSelected(project));
        }
      );
  }

  onProjectSelected(project: Project) {
    console.log(project.embedObject);
    githubEmbed(project.name, project.embedObject);
  }

  frameChange(projectName, alias) {
    this.selectedProject.name = projectName;
    wait(5).then(() =>
      githubEmbed(projectName, projectFiles[alias]));
  }

}
