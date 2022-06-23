import { Observable } from 'rxjs';

export abstract class FileData {
   abstract list(id: string, type: string): Observable<any>;
   abstract download(id: string, api: string, file: string): void;
   abstract upload(id: string, api: string, file: File): Observable<any>;
}
