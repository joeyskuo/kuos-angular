import { Component, OnInit } from '@angular/core';

import * as githubEmbed from '../js/github-embed.min';
import {Project} from "../project.model";
import {GitGlassService} from "../git-glass.service";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

@Component({
  selector: 'app-git-glass',
  templateUrl: './git-glass.component.html',
  styleUrls: ['./git-glass.component.css']
})
export class GitGlassComponent implements OnInit {

  selectedProject: Project;

  constructor(private gitGlassService: GitGlassService) { }

  ngOnInit() {
    this.gitGlassService.projectSelected
      .subscribe(
        (project: Project) => {
          this.selectedProject = project;
          wait(5).then(() => this.onProjectSelected(project));
        }
      );
  }

  setProject(project: Project){
    this.selectedProject = project;
    return project;
  }

  onProjectSelected(project: Project) {
    console.log(project.embedObject);
    githubEmbed(project.name, project.embedObject);
  }

  toJavaFrame() {
    this.selectedProject.name = '#selenium-java';
    wait(5).then(() =>
      githubEmbed('#selenium-java',
        {
          "owner": "joeyskuo",
          "repo": "selenium-java",
          "ref": "master",
          "embed": [
            {
              "type": "xml",
              "label": "testng-amazon.xml",
              "path": "testng-amazon.xml"
            },
            {
              "type": "java",
              "label": "BannerToCartTest.java",
              "path": "src/test/java/com/kuos/tests/BannerToCartTest.java"
            },
            {
              "type": "java",
              "label": "SearchResultTest.java",
              "path": "src/test/java/com/kuos/tests/SearchResultTest.java"
            },            {
              "type": "java",
              "label": "HomePage.java",
              "path": "src/test/java/com/kuos/pageobjects/HomePage.java"
            },            {
              "type": "java",
              "label": "ProductPage.java",
              "path": "src/test/java/com/kuos/pageobjects/ProductPage.java"
            },
            {
              "type": "xml",
              "label": "pom.xml",
              "path": "pom.xml"
            }
          ]
        }));

  }

  toPythonFrame() {
    this.selectedProject.name = '#selenium-python';
    wait(5).then(() =>
      githubEmbed('#selenium-python',
        this.gitGlassService.getProjects()[0].embedObject));

  }

}
