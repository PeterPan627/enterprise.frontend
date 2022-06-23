import { DashboardData, ReferrerData, PatientCumulativeCount } from '../../../interfaces/common/dashboard';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DashboardApi } from '../api/dashboard.api';

@Injectable()
export class DashboardService extends DashboardData {

    constructor(private api: DashboardApi) {
        super();
    }

    getTopReferrers(date: Date, type: string): Observable<ReferrerData[]> {
        return this.api.getTopReferrers(date, type);
    }

    getPatientCumulativeData(date: Date, type: string): Observable<PatientCumulativeCount[]> {
        return this.api.getPatientCumulativeData(date, type);
    }
}
