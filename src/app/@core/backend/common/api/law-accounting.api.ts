import { Injectable } from '@angular/core';
import { ExternalHttpService } from './external-http.service';
import { ConfigurationService } from '../../../../@services/configuration.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LawAccountingApi {
    private readonly featureName: string = 'sales-library';
    private readonly apiController: string = 'law/accounting';
    private api: ExternalHttpService;

    constructor(private http: HttpClient, private config: ConfigurationService) {
        this.api = new ExternalHttpService(this.http, this.config);
    }

    get(id: string): Observable<any> {
        return this.api.get(`${this.apiController}/${id}`);
    }

    update(id: string, update: any): Observable<any> {
        return this.api.patch(`${this.apiController}/${id}`, update);
    }
}
