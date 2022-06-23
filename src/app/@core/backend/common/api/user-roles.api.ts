import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class UserRolesApi {
    private readonly apiController: string = 'users';

    constructor(private api: HttpService) { }

    get(id: string): Observable<any> {
        return this.api.get(`${this.apiController}/${id}/roles`);
    }

    post(id: string, data): Observable<any> {
        return this.api.post(`${this.apiController}/${id}/roles`, data);
    }

    delete(id: string, data): Observable<any> {
        return this.api.delete(`${this.apiController}/${id}/roles`, data);
    }
}
