import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "../../environments/config";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(
    firstName: string,
    lastName: string,
    email: string,
    entityID: string,
    address: string,
    hash: string
  ): Observable<any> {
    if (!firstName || !lastName || !entityID || !email || !address || !hash)
      return;
    return this.http.post(
      API_URL + "register",
      {
        firstName,
        lastName,
        email,
        entityID,
        address,
        hash,
      },
      httpOptions
    );
  }
  registerWhitelist(hash: string, password: string): Observable<any> {
    if (!password || !hash) return;
    return this.http.post(
      API_URL + "set-password",
      { password, hash },
      httpOptions
    );
  }

  loginWhitelist(hash: string, password: string): Observable<any> {
    if (!password || !hash) return;
    return this.http.post(
      API_URL + "whitelist-login",
      { password, hash },
      httpOptions
    );
  }

  setWhiteList(
    hash: string,
    accountHash,
    isWhiteListed: string
  ): Observable<any> {
    if (!isWhiteListed || !hash || !accountHash) return;
    return this.http.post(
      API_URL + "set-whitelist",
      { isWhiteListed, hash },
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          account: accountHash,
        }),
      }
    );
  }

  setAdmin(
    hash: string,
    accountHash: string,
    isAdmin: string
  ): Observable<any> {
    if (!hash || !accountHash || !isAdmin) return;
    return this.http.post(
      API_URL + "set-admin",
      { hash, isAdmin },
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          account: accountHash,
        }),
      }
    );
  }
}
