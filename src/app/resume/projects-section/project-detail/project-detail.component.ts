import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../project.model";
import {GitGlassService} from "../../../git-glass.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: Project;

  constructor(private gitGlassService: GitGlassService) { }

  ngOnInit() {
  }
  onSelected() {
    console.log("Project selected!");
    this.gitGlassService.projectSelected.emit(this.project);
  }
}
