

import { Observable } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { Settings } from './settings';
import { first } from 'rxjs/operators';

export interface User {
  title: string;
  expdateLicense: any;
  compPercent: any;
  ranking: any;
  licenseType: any;
  dateLicense: any;
  notes: any;
  type: string;
  emailPersonal: string;
  department: string;
  employType: any;
  hPhone: string;
  mobilePhone?: string;
  id: number;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  login: string;
  address: Address;
  settings: Settings;
  contactId?: string;
  picture?: string;
}

export interface Address {
  Street: string;
  city: string;
  zipCode: string;
  state: string;
}

export abstract class UserData {
  abstract get gridDataSource(): DataSource;
  abstract getCurrentUser(): Observable<User>;
  abstract list(pageNumber: number, pageSize: number): Observable<any>;
  abstract get(id: number): Observable<User>;
  abstract update(user: User): Observable<User>;
  abstract updateCurrent(user: User): Observable<User>;
  abstract create(user: User): Observable<User>;
  abstract delete(id: number): Observable<boolean>;
  abstract getUserPhoto(id: number): Observable<any>;
}
