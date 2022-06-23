import { Observable } from 'rxjs/Observable';

export interface CommunicationsUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organizationId: number;
    configuration: CommunicationsConfiguration;
}

export interface CommunicationsConfiguration {
    engine: CommunicationsEngine;
    accountId: string;
    password: string;
}

export enum CommunicationsEngine  {
    Twilio = 1,
}

export abstract class CommunicationsUserData {
    abstract get(id: number): Observable<any>;

    abstract create(user: any): Observable<any>;

    abstract update(id: number, user: any): Observable<any>;

    abstract delete(id: number): Observable<any>;
}
