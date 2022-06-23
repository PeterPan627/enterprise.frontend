import { Injectable } from '@angular/core';
import { ExternalHttpService } from './external-http.service';
import { ConfigurationService } from '../../../../@services/configuration.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DropboxApi {
    private readonly apiController: string = '';
    private api: ExternalHttpService;

    constructor(private http: HttpClient, private config: ConfigurationService, private featureName: string) {
        this.api = new ExternalHttpService(this.http, this.config, this.featureName);
    }

    list(id: string): Observable<any> {
        if (id === null || id === undefined) {
            id = '';
        }
        return this.api.get(`${this.apiController}List?path=${id}`);
    }

    download(file: string): void {
        this.api.get(`${this.apiController}download?path=${file}`, {
            responseType: 'blob' as 'json',
            observe: 'response',
        }).subscribe(response => {
            const contentDisposition = response.headers.get('Content-Disposition');
            let filename = contentDisposition.split(';')[1].split('filename')[1].split('=')[1].trim();
            const illegalFileNameCharacters = /[\\/:"*?<>|]+/g;
            filename = filename.replace(illegalFileNameCharacters, '');
            if (! (filename === null || filename === undefined) || filename === '') {
                file = filename;
            }
            this.downloadFile(response, file);
        });
    }

    private downloadFile(response: any, filename: string) {
        const dataType = response.type;
        const binaryData = [];
        binaryData.push(response.body as Blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
        if (filename) {
            downloadLink.setAttribute('download', filename);
        }
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.parentNode.removeChild(downloadLink);
        window.URL.revokeObjectURL(downloadLink.href);
    }

    upload(id: string, file: File): Observable<any> {
        const formData = new FormData();
        formData.append('uploadedFile', file, file.name);
        return this.api.post(`${this.apiController}/Upload?path=${id}`, formData);
    }

    create(id: string): Observable<any> {
        return this.api.post(`${this.apiController}/Upload?path=${id}`, null);
    }

    delete(id: string): Observable<any> {
        return this.api.delete(`${this.apiController}/Delete?path=${id}`, null);
    }
}
