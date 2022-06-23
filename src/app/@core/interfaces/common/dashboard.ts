import { Observable } from 'rxjs';

export interface ReferrerData {
    company: string;
    billed: number;
    paid: number;
}

export interface PatientCumulativeCount {
    date: Date;
    dayTotal: number;
    runningTotal: number;
}

export abstract class DashboardData {
    abstract getTopReferrers(date: Date, type: string): Observable<ReferrerData[]>;
    abstract getPatientCumulativeData(date: Date, type: string): Observable<PatientCumulativeCount[]>;
}
