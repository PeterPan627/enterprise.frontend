import { CommunicationsApi } from '../api/communications.api';
import { Observable } from 'rxjs';
import { CommunicationsUserData } from '../../../interfaces/common/communications-user';
import { Injectable } from '@angular/core';

@Injectable()
export class CommunicationsUserService extends CommunicationsUserData {

    constructor(private api: CommunicationsApi) {
      super();
    }
    get(id: number): Observable<any> {
        return this.api.get(id);
    }

    create(user: any): Observable<any> {
        return this.api.post(user);
    }

    update(id: number, user: any): Observable<any> {
        return this.api.put(id, user);
    }

    delete(id: number): Observable<any> {
        return this.api.delete(id);
    }
}
