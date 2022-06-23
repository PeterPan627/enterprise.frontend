import { Injectable } from '@angular/core';
import { ExternalHttpService } from './external-http.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../../../@services/configuration.service';

@Injectable()
export class NotesHistoryApi {
    private readonly apiController: string = 'notes-history';
    private api: ExternalHttpService;

    constructor(private http: HttpClient, private config: ConfigurationService) {
        this.api = new ExternalHttpService(this.http, this.config);
    }

    getHistoryNotes(id: string, type: string): Observable<any> {
        return this.api.get(`${this.apiController}/${type}/${id}`);
    }

    createHistoryNote(id: string, type: string, data: any): Observable<any> {
        return this.api.post(`${this.apiController}/${type}/${id}`, data);
    }
}
