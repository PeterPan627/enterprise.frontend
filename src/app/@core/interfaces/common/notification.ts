import { Observable } from 'rxjs';

export interface Notification {
    id: number;
    acknowledged: boolean;
    message: string;
    icon?: string;
    status?: string;
    date: Date;
    action: string;
}

export abstract class NotificationData {

    public abstract get(): Observable<any>;

    public abstract acknowledgeNotification(id: number);
}
