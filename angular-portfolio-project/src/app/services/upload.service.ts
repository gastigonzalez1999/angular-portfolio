import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { helpers } from "./helpers";

@Injectable()
export class UploadService {
    public url: string;

    constructor() {
        this.url =  helpers.url;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {
        return new Promise((resolve, reject) => {
            let formData = new FormData();
            let xhr = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name)
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
}