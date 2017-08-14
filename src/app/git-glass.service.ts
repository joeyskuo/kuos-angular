import {EventEmitter} from "@angular/core";
import {Project} from "./project.model";
export class GitGlassService {

  projectSelected = new EventEmitter<Project>();

  private projects: Project[] = [
    new Project(
      'Alexa VUI',
      'Selenium WebDriver test suites developed in Java and Python',
      {
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
      }
    )];

  constructor(){}

  getProjects() {
    return this.projects.slice();
  }
}
