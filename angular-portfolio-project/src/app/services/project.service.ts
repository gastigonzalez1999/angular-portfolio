import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { helpers } from "./helpers";

@Injectable()
export class ProjectService {
    public url: string;

    constructor(
        private _http: HttpClient,
    ) {
        this.url =  helpers.url;
    }

    testService() {
        return 'Testing';
    }

    saveProject(project: Project): Observable<any> {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.url + 'save', params, {headers: headers});
    }
}