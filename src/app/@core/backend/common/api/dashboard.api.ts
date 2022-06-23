import { Injectable } from '@angular/core';
import { ExternalHttpService } from './external-http.service';
import { ReferrerData, PatientCumulativeCount } from '../../../interfaces/common/dashboard';
import { ConfigurationService } from '../../../../@services/configuration.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardApi {
    private readonly apiController: string = 'dashboard';
    private api: ExternalHttpService;

    constructor(private http: HttpClient, private config: ConfigurationService) {
        this.api = new ExternalHttpService(this.http, this.config);
    }

    getTopReferrers(date: Date, type: string): Observable<ReferrerData[]> {
        const year  = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dateString = `${year}-${month}-${day}`;
        return this.api.get(`${this.apiController}/TopReferrers?date=${dateString}&type=${type.substr(0, 1)}`);
    }

    getPatientCumulativeData(date: Date, type: string): Observable<PatientCumulativeCount[]> {
        const year  = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dateString = `${year}-${month}-${day}`;
        return this.api.get(`${this.apiController}/PatientData?date=${dateString}&type=${type.substr(0, 1)}`);
    }

}
