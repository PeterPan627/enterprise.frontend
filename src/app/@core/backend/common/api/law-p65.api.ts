import { Injectable } from '@angular/core';
import { ExternalHttpService } from './external-http.service';
import { ConfigurationService } from '../../../../@services/configuration.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LawP65Api {
    private readonly featureName: string = 'sales-library';
    private readonly apiController: string = 'law/P-65';
    private api: ExternalHttpService;

    constructor(private http: HttpClient, private config: ConfigurationService) {
        this.api = new ExternalHttpService(this.http, this.config);
    }

    getLawAndMotion(id: string): Observable<any> {
        return this.api.get(`${this.apiController}/law-and-motion/${id}`);
    }

    getProcessing(id: string): Observable<any> {
        return this.api.get(`${this.apiController}/processing/${id}`);
    }

    getSettlement(id: string): Observable<any> {
        return this.api.get(`${this.apiController}/settlement/${id}`);
    }

    getDemand(id: string): Observable<any> {
        return this.api.get(`${this.apiController}/demand/${id}`);
    }

    update(id: string, update: any): Observable<any> {
        return this.api.patch(`${this.apiController}/${id}`, update);
    }

    getSalesStages(id: string, type: string): Observable<any> {
        return this.api.get(`${this.apiController}/sales-stages/${type}/${id}`);
    }

    updateSalesStages(id: string, type: string, update: any): Observable<any> {
        return this.api.patch(`${this.apiController}/sales-stages/${type}/${id}`, update);
    }
}
