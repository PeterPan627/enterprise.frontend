import { Injectable } from '@angular/core';
import { NotificationData } from '../../../interfaces/common/notification';
import { NotificationsApi } from '../api/notifications.api';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationService implements NotificationData {
    constructor (private api: NotificationsApi) {
    }

    get(): Observable<any> {
        return this.api.get();
    }

    acknowledgeNotification(id: number) {
        return this.api.acknowledge(id);
    }
}
