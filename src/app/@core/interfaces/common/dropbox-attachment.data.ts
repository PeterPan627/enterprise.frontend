import { Observable } from 'rxjs';

export abstract class DropBoxAttachmentData {
    abstract list(path: string): Observable<any>;

    abstract download(file: string): void;

    abstract upload(path: string, file: File): Observable<any>;

    abstract create(path: string): Observable<any>;
}
