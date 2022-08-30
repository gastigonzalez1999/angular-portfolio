import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { helpers } from 'src/app/services/helpers';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ProjectService]
})
export class DetailsComponent implements OnInit {
  public project: Project = new Project('','','','','','','');
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute 
  ) {
    this.url = helpers.url;
   }

  ngOnInit(): void {
    this._route.params.subscribe(params => { 
      let id = params['id'];

      this.getProject(id);
    })
  }

  getProject(id: string) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(error);
      }
    )
  }
}
