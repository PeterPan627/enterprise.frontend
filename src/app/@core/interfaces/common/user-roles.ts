import { Observable } from 'rxjs';

export interface UserRoles {
    userRoles: object[];
}

export abstract class UserRolesData {
    abstract get(id: string): Observable<any>;
    abstract post(id: string, data): Observable<any>;
    abstract delete(id: string, data): Observable<any>;
}
