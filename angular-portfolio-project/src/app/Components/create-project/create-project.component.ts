import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService]
})
export class CreateProjectComponent implements OnInit {

  public title: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService,
  ) {
      this.title = "Create project";
      this.project =  new Project('','','','','','','');
    }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this.project);
  }

}
