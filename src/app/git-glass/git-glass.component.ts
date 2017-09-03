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
          console.log(enabled);
          this.displayIntro = enabled;
          this.selectedProject = this.emptyProj;
        }
      );
    this.gitGlassService.projectSelected
      .subscribe(
        (project: Project) => {
          this.selectedProject = project;
          this.displayIntro = false;
          console.log(this.displayIntro);
          wait(5).then(() => this.onProjectSelected(project));
        }
      );
  }

  onProjectSelected(project: Project) {
    console.log(project.embedObject);
    githubEmbed(project.name, project.embedObject);
  }


  toJavaFrame() {
    this.selectedProject.name = '#selenium-java';
    wait(5).then(() =>
      githubEmbed('#selenium-java', projectFiles.seleniumJava));

  }

  toPythonFrame() {
    this.selectedProject.name = '#selenium-python';
    wait(5).then(() =>
      githubEmbed('#selenium-python',
        this.gitGlassService.getProjects()[2].embedObject));

  }

  toClientFrame() {
    this.selectedProject.name = '#survey-stork-client';
    wait(5).then(() =>
      githubEmbed('#survey-stork-client', projectFiles.surveyClient));

  }

  toServerFrame() {
    this.selectedProject.name = '#survey-stork-server';
    wait(5).then(() =>
      githubEmbed('#survey-stork-server',
        this.gitGlassService.getProjects()[0].embedObject));

  }

}
