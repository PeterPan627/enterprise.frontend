import { Injectable } from '@angular/core';
import { ExternalHttpService } from './external-http.service';
import { ConfigurationService } from '../../../../@services/configuration.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileApi {
    private readonly apiController: string = 'files';
    private api: ExternalHttpService;

    constructor(private http: HttpClient, private config: ConfigurationService) {
        this.api = new ExternalHttpService(this.http, this.config);
    }

    list(id: string, type: string = 'opportunity'): Observable<any> {
        return this.api.get(`${this.apiController}/${id}?type=${type}`);
    }

    download(id: string, type: string, file: string): void {
        this.api.get(`${this.apiController}/${id}/download?type=${type}&filename=${file}`, {
            responseType: 'blob' as 'json',
        }).subscribe( response => this.downloadFile(response, file));
    }

    upload(id: string, type: string, file: File): Observable<any> {
        const formData = new FormData();
        formData.append('attachment', file, file.name);
        return this.api.post(`${this.apiController}/${id}?type=${type}`, formData);
    }

    private downloadFile(response: any, filename: string) {
        const dataType = response.type;
        const binaryData = [];
        binaryData.push(response);
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
        if (filename) {
            downloadLink.setAttribute('download', filename);
        }
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.parentNode.removeChild(downloadLink);
    }
}
