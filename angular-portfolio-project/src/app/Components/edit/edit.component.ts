import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { helpers } from 'src/app/services/helpers';
import { UploadService } from '../../services/upload.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create-project/create-project.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService],
})
export class EditComponent implements OnInit {
  public title: string;
  public project!: Project;
  public save_project: any;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string = helpers.url;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Edit project';
    this.status = '';
    this.filesToUpload = [];
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      let id = params['id'];

      this.getProject(id);
    });
  }

  getProject(id: string) {
    this._projectService.getProject(id).subscribe(
      (response) => {
        this.project = response.project;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form: any) {
    console.log(this.project);
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if (response.project) {
          if(this.filesToUpload.length) {
            this._uploadService.makeFileRequest(helpers.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image')
            .then((result: any) => {
              this.save_project = result.project;
              this.status === 'success';
              form.reset();
            }); 
          } else {
            this.save_project = response.project;
            this.status === 'success';
          }       
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
