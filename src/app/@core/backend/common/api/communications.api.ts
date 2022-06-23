import { ExternalHttpService } from './external-http.service';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../../../@services/configuration.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CommunicationsApi {
    private readonly featureName: string = 'sms-iq';
    private readonly apiController: string = 'Users';
    private api: ExternalHttpService;

    constructor(private http: HttpClient, private config: ConfigurationService) {
        this.api = new ExternalHttpService(this.http, this.config, this.featureName);
    }

    get(id: number) {
        return this.api.get(`${this.apiController}/${id}`);
    }

    put(id: number, user: any) {
        return this.api.put(`${this.apiController}/${id}`, user);
    }

    post(user: any) {
        return this.api.put(`${this.apiController}`, user);
    }

    delete(id: number) {
        return this.api.delete(`${this.apiController}/${id}`);
    }
}
