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
  public status: string;

  constructor(
    private _projectService: ProjectService,
  ) {
      this.title = "Create project";
      this.project =  new Project('','','','','','','');
      this.status = "";
    }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {
          this.status === 'success';
          form.reset();
        }
        else
          this.status === 'failure';
      },
      error => {
        console.log(error);
      }
    )
  }

}
