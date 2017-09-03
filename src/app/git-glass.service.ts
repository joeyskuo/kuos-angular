import {EventEmitter} from "@angular/core";
import {Project} from "./project.model";
import projectList from './projectList';

export class GitGlassService {

  projectSelected = new EventEmitter<Project>();
  introSelected = new EventEmitter<boolean>();

  private projects: Project[] = projectList;

  constructor(){}

  getProjects() {
    return this.projects.slice();
  }
}
