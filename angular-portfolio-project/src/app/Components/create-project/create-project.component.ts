import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { helpers } from 'src/app/services/helpers';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService, UploadService],
})
export class CreateProjectComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project: Project;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
  ) {
      this.title = "Create project";
      this.project =  new Project('','','','','','','');
      this.save_project = new Project('','','','','','','');
      this.status = "";
      this.filesToUpload = [];
    }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {

          this._uploadService.makeFileRequest(helpers.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image')
          .then((result: any) => {
            this.save_project = result.project;
            this.status === 'success';
            form.reset();
          });          
        }
        else
          this.status === 'failure';
      },
      error => {
        console.log(error);
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
