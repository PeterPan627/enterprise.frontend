import { Injectable } from '@angular/core';
import { ExternalHttpService } from './external-http.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../../../@services/configuration.service';

@Injectable()
export class SalesStageApi {
    private readonly apiController: string = 'sales-stages';
    private api: ExternalHttpService;

    constructor(private http: HttpClient, private config: ConfigurationService) {
        this.api = new ExternalHttpService(this.http, this.config);
    }

    getSalesStages(id: string, type: string): Observable<any> {
        return this.api.get(`${this.apiController}/${type}/${id}`);
    }

    updateSalesStages(id: string, type: string, update: any): Observable<any> {
        return this.api.patch(`${this.apiController}/${type}/${id}`, update);
    }
}
