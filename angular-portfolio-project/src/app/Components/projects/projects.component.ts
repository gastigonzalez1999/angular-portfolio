import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { helpers } from 'src/app/services/helpers';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];
  public url: string;

  constructor(
    private _projectService: ProjectService
  ) { 
    this.url = helpers.url;
  }

  ngOnInit(): void {
  }

  getProjects() {
    this._projectService.getProjects().subscribe(
      response => {
        if (response.projects)
          this.projects = response.projects;
          console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}