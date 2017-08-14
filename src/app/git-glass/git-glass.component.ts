import { Component, OnInit } from '@angular/core';

import * as githubEmbed from '../js/github-embed.min';
import {Project} from "../project.model";
import {GitGlassService} from "../git-glass.service";

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
          this.onProjectSelected(project);
        }
      );
  }

  onButtonClicked() {
    githubEmbed('#git-glass', {
      "owner": "joeyskuo",
      "repo": "alexa-sketches-vui",
      "ref": "master",
      "embed": [
        {
          "type": "js",
          "label": "Webpack config",
          "path": "index.js"
        }
      ]
    });
  }

  onProjectSelected(project: Project) {
    console.log(project.embedObject);
    githubEmbed('#git-glass', project.embedObject);
  }
}
