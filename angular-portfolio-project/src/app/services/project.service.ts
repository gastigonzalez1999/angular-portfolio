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
}