import { CommunicationsData, TextMessage } from '../../../interfaces/common/communications.data';
import { Observable } from 'rxjs';
import { TextMessageApi } from '../api/texting.api';
import { Injectable } from '@angular/core';
import { PhoneCallApi } from '../api/calling.api';
import { EmailApi } from '../api/email.api';

@Injectable()
export class CommunicationsService extends CommunicationsData {
    constructor(
        private textApi: TextMessageApi,
        private callApi: PhoneCallApi,
        private emailApi: EmailApi,
    ) {
        super();
    }

    sendTextMessage(textMessage: TextMessage): Observable<any> {
        return this.textApi.post(textMessage);
    }

    getMessages(phoneNumber: string): Observable<any> {
        return this.textApi.get(phoneNumber);
    }

    getEmail(email: string): Observable<any> {
        return this.emailApi.getEmails(email);
    }

    getPhoneCalls(phoneNumber: string): Observable<any> {
        return this.callApi.getCalls(phoneNumber);
    }

    getAccessToken(): Observable<any> {
        return this.callApi.get();
    }
}
