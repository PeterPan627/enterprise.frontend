import { Injectable } from '@angular/core';
import { ExternalHttpService } from './external-http.service';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { ConfigurationService } from '../../../../@services/configuration.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactApi {
    private readonly apiController: string = 'contacts';
    private api: ExternalHttpService;

    constructor(private http: HttpClient, private config: ConfigurationService) {
        this.api = new ExternalHttpService(this.http, this.config);
    }

    getDataSource(type?: string): DataSource {
        return this.api.getServerDataSource(`${this.apiController}`);
    }

    get(id: string, type?: string): Observable<any> {
        if (type === null || type === undefined) {
            return this.api.get(`${this.apiController}/${id}`);
        } else {
            return this.api.get(`${this.apiController}/${id}?type=${type}`);
        }
    }

    update(id: string, update: any): Observable<any> {
        return this.api.patch(`${this.apiController}/${id}`, update);
    }

    create(data: any): Observable<any> {
        return this.api.post(`${this.apiController}`, data);
    }
}
