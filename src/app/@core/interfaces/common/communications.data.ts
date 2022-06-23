import { Observable } from 'rxjs';

export abstract class CommunicationsData {
    abstract sendTextMessage(textMessage: TextMessage): Observable<any>;
    abstract getMessages(phoneNumber: string): Observable<any>;
    abstract getAccessToken(): Observable<any>;
}

export interface TextMessage {
    to: string;
    from: string;
    message: string;
    multiMedia: string[];
}

export interface EmailMessage {
    toClient: string;
    subject: string;
    ccUser: string;
}

export interface CallHistoryItem {
    direction: Direction;
    date: Date;
    duration?: string;
}

export interface TextMessageHistoryItem {
    message: string;
    multiMedia: string[];
    date: Date;
    direction: Direction;
}

export enum Direction {
    incoming = 0,
    outgoing = 1,
}
