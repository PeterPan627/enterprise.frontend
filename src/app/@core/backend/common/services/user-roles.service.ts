import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRolesApi } from '../api/user-roles.api';
import { UserRolesData } from '../../../interfaces/common/user-roles';

@Injectable()
export class UserRolesService implements UserRolesData {
    constructor(private api: UserRolesApi) {
    }

    get(id: string): Observable<any> {
        return this.api.get(id);
    }

    post(id: string, data): Observable<any> {
        return this.api.post(id, data);
    }

    delete(id: string, data): Observable<any> {
        return this.api.delete(id, data);
    }
}
