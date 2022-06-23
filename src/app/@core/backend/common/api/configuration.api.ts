import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Configuration } from '../../../interfaces/common/configuration';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ConfigurationApi {
    private readonly apiController: string = 'configuration';

    constructor(private api: HttpService) {}

    get(params?: HttpParams): Promise<Configuration> {
        return this.api.get(`${this.apiController}`, { params }).toPromise();
    }
}
