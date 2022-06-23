

import { Observable } from 'rxjs';

export abstract class OrderTypeData {
  abstract list(): Observable<string[]>;
}
