

import { Observable } from 'rxjs';

export abstract class OrderStatusData {
  abstract list(): Observable<string[]>;
}
